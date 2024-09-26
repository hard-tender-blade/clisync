import publicConfig from '@/modules/shared/config/publicConfig'
import { GoogleCalendarEvent } from '@/modules/shared/types/calendar'

const getUserCalendarEventsInTimeInterval = async (
    {
        start,
        end,
        userId,
        token,
    }: {
        start: string,
        end: string,
        userId: string,
        token?: string,
    }
): Promise<GoogleCalendarEvent[] | null> => {
    const searchParams = new URLSearchParams()
    searchParams.append('start', start)
    searchParams.append('end', end)

    const response = await fetch(
        `${publicConfig.next_public_origin}/api/user/${userId}/googleCalendarEvents?${searchParams.toString()}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    )

    if (response.status !== 200) return null

    return response.json()
}
export default getUserCalendarEventsInTimeInterval
