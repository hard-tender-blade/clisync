'use client'
import React from 'react'
import moment from 'moment'
import { Language } from '@/modules/client/languageInterface/language'
import ToolBar from '../month/components/toolBar'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import Link from 'next/link'
import { Day, GoogleCalendarEvent } from '@/modules/shared/types/calendar'
import generateDayInterval from '../utils/generateDayInterval'
import DaySessionView from '../components/views/daySessionView'
import { SessionWithClient, User } from '@/modules/shared/types/mainTypes'
import buildDay from '../utils/buildDay'

export default function Content({
    user,
    openSessionId,
    start,
    sessions,
    googleCalendarEvents,
}: {
    lang: Language
    user: User
    openSessionId?: string
    start: string
    sessions: SessionWithClient[]
    googleCalendarEvents: GoogleCalendarEvent[]
}) {
    const day: Day = buildDay(start, sessions, googleCalendarEvents)

    const nextDayUrl = () => {
        const { start, end } = generateDayInterval(day.date.clone().add(1, 'day'))

        const searchParams = new URLSearchParams()
        searchParams.append('start', start.toISOString())
        searchParams.append('end', end.toISOString())

        return `/workspace/calendar/day?${searchParams.toString()}`
    }
    const prevDayUrl = () => {
        const { start, end } = generateDayInterval(day.date.clone().subtract(1, 'day'))

        const searchParams = new URLSearchParams()
        searchParams.append('start', start.toISOString())
        searchParams.append('end', end.toISOString())

        return `/workspace/calendar/day?${searchParams.toString()}`
    }
    const currentDayUrl = () => {
        const { start, end } = generateDayInterval(moment())

        const searchParams = new URLSearchParams()
        searchParams.append('start', start.toISOString())
        searchParams.append('end', end.toISOString())

        return `/workspace/calendar/day?${searchParams.toString()}`
    }

    // session to open
    const sessionDefault =
        sessions.find((s) => s.id === openSessionId) || day.sessions[0] || null

    return (
        <div className=" h-[85vh] px-24">
            <toolBar viewType={'day'}>
                <div className="join">
                    <Link href={prevDayUrl()} className="btn join-item btn-sm">
                        <FaAngleLeft />
                    </Link>
                    <Link href={nextDayUrl()} className="btn join-item btn-sm">
                        <FaAngleRight />
                    </Link>
                </div>
                <Link href={currentDayUrl()} className="btn join-item btn-sm">
                    Today
                </Link>
            </toolBar>

            <DaySessionView day={day} user={user} sessionDefault={sessionDefault} />
        </div>
    )
}
