import authMiddleware from '@/modules/shared/middleware/authMiddleware'
import getSessionsOfTimeInterval from '@/modules/client/query/sessions/getSessionsOfTimeInterval'
import permanentRedirectSessionExpired from '../../utils/permanentRedirectSessionExpired'
import { notFound } from 'next/navigation'
import Content from './content'
import generateWeekInterval from '../utils/generateWeekInterval'
import getCurrentUser from '@/modules/client/query/user/getCurrentUser'
import getUserCalendarEventsInTimeInterval from '@/modules/client/query/sessions/getUserCalendarEventsInTimeInterval'

export default async function Page(
    {
        searchParams,
    }: {
        searchParams: {
            end?: string
            start?: string
        }
    },
    request: Request,
) {
    const { userId, token, lang } = authMiddleware(request)
    if (!userId || !lang || !token)
        return permanentRedirectSessionExpired(`/workspace/calendar/week`)

    // get interval from search params or generate for current month
    let { start, end } = searchParams
    if (!start || !end) {
        const interval = generateWeekInterval()
        start = interval.start.toISOString()
        end = interval.end.toISOString()
    }

    const [user, sessions, userGCEvents] = await Promise.all([
        getCurrentUser(token),
        getSessionsOfTimeInterval({
            start,
            end,
            token,
        }),
        getUserCalendarEventsInTimeInterval({
            start,
            end,
            userId,
            token,
        }),
    ])
    if (!user) return permanentRedirectSessionExpired(`/workspace/calendar/week`)
    if (!sessions) return notFound()
    if (!userGCEvents) return notFound()

    return (
        <main>
            <Content
                user={user}
                start={start}
                sessions={sessions}
                googleCalendarEvents={userGCEvents}
            />
        </main>
    )
}
