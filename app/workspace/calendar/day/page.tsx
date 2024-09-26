import authMiddleware from '@/modules/shared/middleware/authMiddleware'
import getSessionsOfTimeInterval from '@/modules/client/query/sessions/getSessionsOfTimeInterval'
import permanentRedirectSessionExpired from '../../utils/permanentRedirectSessionExpired'
import { notFound } from 'next/navigation'
import Content from './content'
import generateDayInterval from '../utils/generateDayInterval'
import getCurrentUser from '@/modules/client/query/user/getCurrentUser'
import getUserCalendarEventsInTimeInterval from '@/modules/client/query/sessions/getUserCalendarEventsInTimeInterval'

export default async function Page(
    {
        searchParams,
    }: {
        searchParams: {
            end?: string
            start?: string
            sessionId: string
        }
    },
    request: Request,
) {
    const { userId, token, lang } = authMiddleware(request)
    if (!userId || !lang || !token)
        return permanentRedirectSessionExpired(`/workspace/calendar/day`)

    // get interval from search params or generate for current month
    let { start, end } = searchParams
    if (!start || !end) {
        const interval = generateDayInterval()
        start = interval.start.toISOString()
        end = interval.end.toISOString()
    }

    console.log('start', start)
    console.log('end', end)

    const [user, sessions, calendarGCEvents] = await Promise.all([
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
    if (!user) return permanentRedirectSessionExpired(`/workspace/calendar/day`)
    if (!sessions) return notFound()
    if (!calendarGCEvents) return notFound()

    const openSessionId = searchParams.sessionId

    return (
        <main>
            <Content
                lang={lang}
                user={user}
                openSessionId={openSessionId}
                start={start}
                sessions={sessions}
                googleCalendarEvents={calendarGCEvents}
            />
        </main>
    )
}
