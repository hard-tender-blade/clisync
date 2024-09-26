import { MONTH_CALENDAR_DAYS_INTERVAL } from "@/modules/shared/constants/constants";
import { Day, GoogleCalendarEvent } from "@/modules/shared/types/calendar";
import { SessionWithClient } from "@/modules/shared/types/mainTypes";
import moment from "moment";

const buildMonthDays = (startS: string, endS: string, sessions: SessionWithClient[], userGoogleCalendarEvents: GoogleCalendarEvent[]): Day[] => {
    const currentTime = moment()
    const start = moment(startS)
    const end = moment(endS)

    const days = []

    const monthMiddleValue = start.clone().add(Math.floor(MONTH_CALENDAR_DAYS_INTERVAL / 2), 'days')

    // delete from googleCalendar actual sessions, we dont want to show them twice
    const googleEventsToRemove = sessions.map((session) => {
        return session.googleEventId
    })
    userGoogleCalendarEvents = userGoogleCalendarEvents.filter((event) => {
        return !googleEventsToRemove.includes(event.id)
    })


    // map days 
    for (let i = 0; i < MONTH_CALENDAR_DAYS_INTERVAL; i++) {
        const processDay = start.clone().add(i, 'days')

        const processDaySessions: SessionWithClient[] = sessions.filter((session) => {
            return moment(session.start).isSame(processDay, 'day')
        })
        sessions = sessions.filter((session) => {
            return !processDaySessions.includes(session)
        })

        const processDayGoogleCalendarEvents: GoogleCalendarEvent[] = userGoogleCalendarEvents.filter((event) => {
            return moment(event.start.dateTime).isSame(processDay, 'day')
        }
        )
        userGoogleCalendarEvents = userGoogleCalendarEvents.filter((event) => {
            return !processDayGoogleCalendarEvents.includes(event)
        })

        days.push({
            date: processDay,
            weekday: processDay.format('dddd'),
            currentMonth: processDay.month() === monthMiddleValue.month(),
            today: processDay.isSame(currentTime, 'day'),
            sessions: processDaySessions,
            googleCalendarEvents: processDayGoogleCalendarEvents,
        })
    }

    return days
}
export default buildMonthDays