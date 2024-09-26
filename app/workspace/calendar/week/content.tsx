'use client'
import React from 'react'
import MenuBar from '../components/menuBar'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import Link from 'next/link'
import { Day, GoogleCalendarEvent } from '@/modules/shared/types/calendar'
import WeekView from '../components/views/weekView'
import generateWeekInterval from '../utils/generateWeekInterval'
import moment from 'moment'
import { SessionWithClient, User } from '@/modules/shared/types/mainTypes'
import buildWeekDays from '../utils/buildWeekDays'
import { notFound } from 'next/navigation'

export default function Content({
    user,
    start,
    sessions,
    googleCalendarEvents,
}: {
    user: User
    start: string
    sessions: SessionWithClient[]
    googleCalendarEvents: GoogleCalendarEvent[]
}) {
    const days: Day[] = buildWeekDays(start, sessions, googleCalendarEvents)
    if (days.length > 7) return notFound()

    const startMoment = moment(start)

    const nextWeekUrl = () => {
        const { start, end } = generateWeekInterval(startMoment.clone().add(2, 'day'))

        const searchParams = new URLSearchParams()
        searchParams.append('start', start.toISOString())
        searchParams.append('end', end.toISOString())

        return `/workspace/calendar/week?${searchParams.toString()}`
    }
    const prevWeekUrl = () => {
        const { start, end } = generateWeekInterval(startMoment.clone())

        const searchParams = new URLSearchParams()
        searchParams.append('start', start.toISOString())
        searchParams.append('end', end.toISOString())

        return `/workspace/calendar/week?${searchParams.toString()}`
    }
    const currentWeekUrl = () => {
        const { start, end } = generateWeekInterval(moment())

        const searchParams = new URLSearchParams()
        searchParams.append('start', start.toISOString())
        searchParams.append('end', end.toISOString())

        return `/workspace/calendar/week?${searchParams.toString()}`
    }

    return (
        <div className=" h-[85vh] px-24">
            <MenuBar viewType={'week'}>
                <div className="join">
                    <Link href={prevWeekUrl()} className="btn join-item btn-sm">
                        <FaAngleLeft />
                    </Link>
                    <Link href={nextWeekUrl()} className="btn join-item btn-sm">
                        <FaAngleRight />
                    </Link>
                </div>
                <Link href={currentWeekUrl()} className="btn join-item btn-sm">
                    Today
                </Link>{' '}
            </MenuBar>

            <WeekView days={days} user={user} />
        </div>
    )
}
