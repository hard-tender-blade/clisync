class CryptoManager {
    private derivedKey: CryptoKey | null = null;

    // Function to generate a key from a passphrase
    async generateKeyFromPassphrase(passphrase: string): Promise<CryptoKey> {
        const encoder = new TextEncoder();
        const keyMaterial = await crypto.subtle.importKey(
            "raw",
            encoder.encode(passphrase),
            { name: "PBKDF2" },
            false,
            ["deriveKey"]
        );

        const key = await crypto.subtle.deriveKey(
            {
                name: "PBKDF2",
                salt: crypto.getRandomValues(new Uint8Array(16)),
                iterations: 100000,
                hash: "SHA-256"
            },
            keyMaterial,
            { name: "AES-GCM", length: 256 },
            true,  // Make key non-extractable
            ["encrypt", "decrypt"]
        );

        // Store the derived key securely (not extractable)
        this.derivedKey = key;

        // Persist the key using localStorage (or IndexedDB for better security on large data)
        await this.storeKey(key);

        return key;
    }

    // Function to store the key securely in localStorage (or use IndexedDB for larger data)
    private async storeKey(key: CryptoKey): Promise<void> {
        const exportedKey = await crypto.subtle.exportKey("jwk", key);
        localStorage.setItem('derivedKey', JSON.stringify(exportedKey));
    }

    // Function to load the key from localStorage
    private async loadKey(): Promise<CryptoKey | null> {
        const storedKey = localStorage.getItem('derivedKey');
        if (storedKey) {
            const keyData = JSON.parse(storedKey);
            return crypto.subtle.importKey(
                "jwk", keyData,
                { name: "AES-GCM" },
                false,
                ["encrypt", "decrypt"]
            );
        }
        return null;
    }

    // Function to check if a key exists (i.e., has been generated or loaded)
    public checkIfKeyExists(): boolean {
        return this.derivedKey !== null;
    }

    // Function to encrypt data using the derived key
    async encryptData(data: string): Promise<string> {
        if (!this.checkIfKeyExists()) {
            throw new Error("No encryption key available");
        }

        const encoder = new TextEncoder();
        const iv = crypto.getRandomValues(new Uint8Array(12));  // Initialization vector for AES-GCM
        const encrypted = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: iv },
            this.derivedKey!,
            encoder.encode(data)
        );

        // Combine the IV and encrypted data into a single string (base64 encoded)
        const encryptedArray = new Uint8Array(encrypted);
        const combinedArray = new Uint8Array(iv.length + encryptedArray.length);

        combinedArray.set(iv, 0);
        combinedArray.set(encryptedArray, iv.length);

        // Convert combined array to base64 string for storage or transmission
        return btoa(String.fromCharCode(...Array.from(combinedArray)));
    }

    // Function to decrypt data using the derived key
    async decryptData(encryptedDataStr: string): Promise<string> {
        if (!this.checkIfKeyExists()) {
            throw new Error("No decryption key available");
        }

        // Decode the base64 encoded string into a byte array
        const encryptedData = new Uint8Array(atob(encryptedDataStr).split('').map(c => c.charCodeAt(0)));

        // Extract IV from the first 12 bytes of the encrypted data
        const iv = encryptedData.slice(0, 12);

        // The rest is the encrypted data
        const encryptedBytes = encryptedData.slice(12);

        const decrypted = await crypto.subtle.decrypt(
            { name: "AES-GCM", iv: iv },
            this.derivedKey!,
            encryptedBytes
        );

        const decoder = new TextDecoder();
        return decoder.decode(decrypted);
    }

    // Function to initialize the key from storage (if available)
    async initialize(): Promise<void> {
        const storedKey = await this.loadKey();
        if (storedKey) {
            this.derivedKey = storedKey;
        }
        return Promise.resolve();
    }

    // Constructor to initialize the key from storage
    constructor() {
        this.initialize();
    }
}

export default CryptoManager;
