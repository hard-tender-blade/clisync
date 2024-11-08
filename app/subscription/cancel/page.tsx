import React from 'react'

export default function Page() {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <section>
                <div className="product Box-root">
                    <div className="description Box-root">
                        <h3>Subscription to starter plan was canceled!</h3>
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
