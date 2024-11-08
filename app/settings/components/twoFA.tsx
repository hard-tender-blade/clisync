import { showAlert } from '@/modules/client/utils/alert/alerts'
import React from 'react'

export default function TwoFA() {
    const [code, setCode] = React.useState<number>()
    const [secret, setSecret] = React.useState<string>()
    const [qrCodeUrl, setQrCodeUrl] = React.useState<string | null>(null)

    const handleGenerateTwoFA = async () => {
        const response = await fetch('/api/auth/2fa/generate')

        if (!response.ok) {
            showAlert('error', 'mid', 'Failed to generate 2FA')
            return
        }

        const data = await response.json()
        const url = data.qrCodeUrl
        const secret = data.secret

        if (!url || !secret) {
            showAlert('error', 'mid', 'Failed to generate 2FA')
            return
        }

        setSecret(secret)
        setQrCodeUrl(data.qrCodeUrl)
    }

    const handleEnableTwoFA = async () => {
        if (!code || !secret) {
            showAlert('error', 'mid', 'Invalid code')
            return
        }

        const response = await fetch('/api/auth/2fa/enable', {
            method: 'POST',
            body: JSON.stringify({
                token: code,
                secret: secret,
            }),
        })

        if (!response.ok) {
            showAlert('error', 'mid', 'Failed to enable 2FA')
            return
        }

        showAlert('success', 'mid', '2FA enabled')
    }

    return (
        <div className="flex flex-col gap-4">
            <button onClick={handleGenerateTwoFA}>Enable 2FA</button>

            {qrCodeUrl && <img src={qrCodeUrl} alt="QR code" className="h-44 w-44" />}

            <div className="flex w-full max-w-lg gap-4">
                <input
                    className="input input-bordered "
                    type="number"
                    value={code}
                    onChange={(e) => setCode(parseInt(e.target.value))}
                    placeholder="xxx - xxx"
                />
                <button className="btn" onClick={handleEnableTwoFA}>
                    Enable 2FA
                </button>
            </div>
        </div>
    )
}
