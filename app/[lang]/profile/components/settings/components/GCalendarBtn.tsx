import updateUser from '@/modules/client/query/user/updateUser'
import { showAlert } from '@/modules/client/utils/alert/alerts'
import { User } from '@/modules/shared/types/mainTypes'
import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'
import { SiGooglecalendar } from 'react-icons/si'

export default function GClaendarButton({
    user,
    setUser,
}: {
    user: User
    setUser: (user: User) => void
}) {
    const googleLogin = useGoogleLogin({
        onSuccess: async ({ code }) => {
            const tokens = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    code,
                }),
            })

            const data = await tokens.json()
            console.log(data)
            const updatedUser = await updateUser({
                ...user,
                googleCalendarConnected: true,
            })

            if (!updatedUser) {
                showAlert(
                    'error',
                    'short',
                    'Failed to update profile please try again later or contact support',
                )
                return
            }
            showAlert('success', 'short', 'Profile updated successfully')
            setUser(updatedUser)
        },
        flow: 'auth-code',
        onError: (error) => {
            console.error(error)
        },
        scope: 'https://www.googleapis.com/auth/calendar',
    })
    return (
        <div>
            <button className="btn m-4" onClick={googleLogin}>
                <SiGooglecalendar size={25} />
                Connect google calendar
            </button>
        </div>
    )
}
