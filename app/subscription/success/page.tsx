'use client'

import React, { useEffect } from 'react'

export default function Page() {
    useEffect(() => {
        //get token from url
        const urlParams = new URLSearchParams(window.location.search)
        const token = urlParams.get('token')
        //send token to backend
        fetch('/api/purchase/success', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
            }),
        })
    }, [])

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <section>
                <div className="product Box-root">
                    <div className="description Box-root">
                        <h3>Subscription to starter plan successful!</h3>
                    </div>
                </div>
                <form action="/create-portal-session" method="POST">
                    <input
                        type="hidden"
                        id="session-id"
                        name="session_id"
                        // value={sessionId}
                    />
                    <button id="checkout-and-portal-button" type="submit">
                        Manage your billing information
                    </button>
                </form>
            </section>
        </div>
    )
}
