import React from 'react'

import { User } from '@/modules/shared/types/mainTypes'
import { GoogleOAuthProvider } from '@react-oauth/google'
import publicConfig from '@/modules/shared/config/publicConfig'
import { SiGooglecalendar } from 'react-icons/si'
import GoogleCalendarConnectButton from './components/googleCalendarConnectionButton'

export default function Settings({
    user,
    setUser,
}: {
    user: User
    setUser: (user: User) => void
}) {
    return (
        <div>
            <GoogleOAuthProvider clientId={publicConfig.next_public_google_client_id}>
                <p>uk - {user.googleCalendarConnected ? 'tue' : 'fa'}</p>
                {user.googleCalendarConnected ? (
                    <div className="m-4 flex flex-row gap-2">
                        <SiGooglecalendar size={25} />
                        Google calendar connected ✅
                    </div>
                ) : (
                    <GoogleCalendarConnectButton user={user} setUser={setUser} />
                )}
            </GoogleOAuthProvider>
        </div>
    )
}
