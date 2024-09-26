import getUserDataFromGoogleAuthCodeFlow from '@/modules/client/query/auth/getUserDataFromGoogleSignUpPage'
import connectGoogleCalendar from '@/modules/client/query/user/connectGoogleCalendar'
import { showAlert } from '@/modules/client/utils/alert/alerts'
import { User } from '@/modules/shared/types/mainTypes'
import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'
import { SiGooglecalendar } from 'react-icons/si'

export default function GoogleCalendarConnectButton({
    user,
    setUser,
}: {
    user: User
    setUser: (user: User) => void
}) {
    const handleClick = useGoogleLogin({
        onSuccess: async ({ code }) => {
            const data = await getUserDataFromGoogleAuthCodeFlow(code)
            if (!data || !data?.tokens.refresh_token) {
                showAlert(
                    'error',
                    'short',
                    'Failed to authenticate with Google, contact support please',
                )
                return
            }

            const updatedUser = await connectGoogleCalendar(
                user.id,
                data.tokens.refresh_token,
            )
            if (!updatedUser) {
                showAlert(
                    'error',
                    'short',
                    'Failed to authenticate with Google, contact support please',
                )
                return
            }
            setUser({ ...updatedUser })
            showAlert('success', 'short', 'Google calendar connected')
        },
        onError: (error) => {
            showAlert(
                'error',
                'short',
                'Failed to authenticate with Google, contact support please',
            )
        },
        flow: 'auth-code',
        scope: 'https://www.googleapis.com/auth/calendar',
    })

    return (
        <div>
            <button className="btn m-4" onClick={handleClick}>
                <SiGooglecalendar size={25} />
                Connect google calendar
            </button>
        </div>
    )
}
