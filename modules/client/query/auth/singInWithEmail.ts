import { SignInWithEmailRequest } from "@/modules/shared/types/subTypes"

const singInWithEmail = async (signInWithEmailRequest: SignInWithEmailRequest): Promise<boolean> => {
    const response = await fetch(`/api/auth/sign-in/email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInWithEmailRequest),
    })

    if (!response.ok) console.error("Failed to login user")
    return response.ok
}
export default singInWithEmail