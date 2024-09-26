'use client'
import React, { useState } from 'react'
import moment from 'moment'
import { Language } from '@/modules/client/languageInterface/language'
import MonthView from '../components/views/monthView'
import MenuBar from '../components/menuBar'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import Link from 'next/link'
import generateMonthInterval from '../utils/generateMonthInterval'
import { Day, GoogleCalendarEvent } from '@/modules/shared/types/calendar'
import { SessionWithClient, User } from '@/modules/shared/types/mainTypes'
import buildMonthDays from '../utils/buildMonthDays'
import { MONTH_CALENDAR_DAYS_INTERVAL } from '@/modules/shared/constants/constants'
import { notFound } from 'next/navigation'
import WorkSpaceSideBarWrapper from '../../components/workSpaceSideBarWrapper'

export default function Content({
    user,
    start,
    end,
    sessions,
    userGoogleCalendarEvents,
}: {
    lang: Language
    user: User
    start: string
    end: string
    sessions: SessionWithClient[]
    userGoogleCalendarEvents: GoogleCalendarEvent[]
}) {
    // const days = daysStringDateToDays(daysStingDate)
    //build days to display
    const getCurrentDayIndex = () =>
        days.findIndex((day) => day.date.isSame(moment(), 'day'))

    const [selectedDayIndex, setSelectedDayIndex] = useState<number>(getCurrentDayIndex())
    const days: Day[] = buildMonthDays(start, end, sessions, userGoogleCalendarEvents)
    if (days.length > MONTH_CALENDAR_DAYS_INTERVAL) return notFound()

    const getCurrentMonthMiddleDate = () => days[days.length / 2 || 0].date
    const nextMonthUrl = () => {
        const { start, end } = generateMonthInterval(
            getCurrentMonthMiddleDate().clone().add(1, 'month'),
        )

        const searchParams = new URLSearchParams()
        searchParams.append('start', start.toISOString())
        searchParams.append('end', end.toISOString())

        return `/workspace/calendar/month?${searchParams.toString()}`
    }
    const prevMonthUrl = () => {
        const { start, end } = generateMonthInterval(
            getCurrentMonthMiddleDate().clone().subtract(1, 'month'),
        )

        const searchParams = new URLSearchParams()
        searchParams.append('start', start.toISOString())
        searchParams.append('end', end.toISOString())

        return `/workspace/calendar/month?${searchParams.toString()}`
    }
    const currentMonthUrl = () => {
        const { start, end } = generateMonthInterval(moment())

        const searchParams = new URLSearchParams()
        searchParams.append('start', start.toISOString())
        searchParams.append('end', end.toISOString())

        return `/workspace/calendar/month?${searchParams.toString()}`
    }

    return (
        <WorkSpaceSideBarWrapper currentPage="/workspace/calendar/month">
            <div className=" h-full w-full">
                <MenuBar viewType={'month'}>
                    <div className="join">
                        <Link href={prevMonthUrl()} className="btn join-item">
                            <FaAngleLeft />
                        </Link>
                        <span className="btn join-item">
                            {getCurrentMonthMiddleDate().format('MMMM YYYY')}
                        </span>
                        <Link href={nextMonthUrl()} className="btn join-item">
                            <FaAngleRight />
                        </Link>
                    </div>
                    <Link href={currentMonthUrl()} className="btn join-item">
                        Today
                    </Link>
                </MenuBar>

                {/* <Separator size="sm" /> */}

                <MonthView
                    days={days}
                    user={user}
                    selectedDayIndex={selectedDayIndex}
                    setSelectedDayIndex={setSelectedDayIndex}
                />
            </div>
        </WorkSpaceSideBarWrapper>
    )
}
