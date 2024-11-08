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
    // const { userId, token, lang } = authMiddleware(request)
    // if (!userId || !lang || !token)
    //     return permanentRedirectSessionExpired(`/workspace/calendar/day`)

    // // get interval from search params or generate for current month
    // let { start, end } = searchParams
    // if (!start || !end) {
    //     const interval = generateDayInterval()
    //     start = interval.start.toISOString()
    //     end = interval.end.toISOString()
    // }

    // console.log('start', start)
    // console.log('end', end)

    // const [user, sessions, calendarGCEvents] = await Promise.all([
    //     getCurrentUser(token),
    //     getSessionsOfTimeInterval({
    //         start,
    //         end,
    //         token,
    //     }),
    //     getUserCalendarEventsInTimeInterval({
    //         start,
    //         end,
    //         userId,
    //         token,
    //     }),
    // ])
    // if (!user) return permanentRedirectSessionExpired(`/workspace/calendar/day`)
    // if (!sessions) return notFound()
    // if (!calendarGCEvents) return notFound()

    // const openSessionId = searchParams.sessionId

    return (
        <main>
            {/* <Content
                lang={lang}
                user={user}
                openSessionId={openSessionId}
                start={start}
                sessions={sessions}
                googleCalendarEvents={calendarGCEvents}
            /> */}
        </main>
    )
}
