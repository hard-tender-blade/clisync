import { useMutateUser } from '@/modules/client/query/user/useUpdateUser'
import { useUser } from '@/modules/client/query/user/useUser'
import { showAlert } from '@/modules/client/utils/alert/alerts'
import Loading from '@/modules/client/utils/loading/loading'
import { User } from '@/modules/shared/types/mainTypes'
import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'
import { SiGooglecalendar } from 'react-icons/si'

export default function ConnectGoogleCalendarButton() {
    const { data: user, isLoading: isLoadingUser } = useUser()
    const mutateUser = useMutateUser()

    const googleLogin = useGoogleLogin({
        onSuccess: async () => {
            if (!user) return

            const updatedUser = { ...user, googleCalendarService: true } as User

            mutateUser.mutate(updatedUser, {
                onSuccess: () => {
                    showAlert('success', 'short', 'Profile updated successfully')
                },
                onError: () => {
                    showAlert(
                        'error',
                        'short',
                        'Failed to update profile please try again later or contact support',
                    )
                },
            })
        },
        flow: 'auth-code',
        onError: (error) => {
            console.error(error)
        },
        scope: 'https://www.googleapis.com/auth/calendar',
    })

    if (isLoadingUser) return <Loading />

    return (
        <div>
            <button className="btn m-4" onClick={googleLogin}>
                <SiGooglecalendar size={25} />
                Connect google calendar
            </button>
        </div>
    )
}
