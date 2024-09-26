import React from 'react'
import DayView from './dayView'
import { User } from '@/modules/shared/types/mainTypes'
import { Day } from '@/modules/shared/types/calendar'

export default function MonthView({
    days,
    selectedDayIndex,
    setSelectedDayIndex,
    user,
}: {
    days: Day[]
    selectedDayIndex: number
    setSelectedDayIndex: (day: number) => void
    user: User
}) {
    return (
        <div className="flex gap-1 p-2">
            <div className={'w-3/12'}>
                <DayView day={days[selectedDayIndex]} user={user} showTime>
                    <div className="flex justify-between pb-2">
                        <p className="p-bold">
                            {days[selectedDayIndex].date.format('MM.DD')} -{' '}
                            {days[selectedDayIndex].weekday}
                        </p>
                    </div>
                </DayView>
            </div>

            {selectedDayIndex && <div className="divider divider-horizontal m-1 w-1" />}

            <div className={selectedDayIndex ? 'w-9/12' : 'w-full'}>
                {/* weekday names */}
                <div className="grid grid-cols-7">
                    {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => {
                        return (
                            <div
                                key={day}
                                className="border-[1px] border-t-0 border-solid border-base-200 pb-1 text-center first:border-l-0 last:border-r-0"
                            >
                                <span className="opacity-60">{day}</span>
                            </div>
                        )
                    })}
                </div>

                {/* month days */}
                <div className="grid grid-cols-7 overflow-hidden rounded-lg">
                    {days.map((day, i) => {
                        return (
                            <label
                                onClick={() => setSelectedDayIndex(i)}
                                key={day.date.format('MM.DD')}
                                className={`
                            h-20 cursor-pointer border-[1px] border-solid border-base-200 p-2 pt-1 hover:bg-base-200
                            ${i % 7 === 0 && 'border-l-0'} 
                            ${i % 7 === 6 && 'border-r-0'}
                            ${i > days.length - 8 && 'border-b-0'}
                            ${selectedDayIndex && days[selectedDayIndex]?.date.toISOString() === day.date.toISOString() && 'rounded border-primary'}
                        `}
                            >
                                <p
                                    className={`
                                            ${!day.currentMonth && 'opacity-20'} 
                                            ${day.today && 'flex h-6 w-6 items-center justify-center rounded-full bg-primary p-3 text-white'}
                                        `}
                                >
                                    {day.date.format('D')}
                                </p>

                                {day.sessions.length > 0 && (
                                    <p className="text-sm opacity-60 hover:underline">
                                        {day.sessions.length}{' '}
                                        {day.sessions.length === 1
                                            ? 'meeting'
                                            : 'meetings'}
                                    </p>
                                )}
                                {day.googleCalendarEvents.length > 0 && (
                                    <p className="text-sm opacity-60 hover:underline">
                                        {day.googleCalendarEvents.length}{' '}
                                        {day.googleCalendarEvents.length === 1
                                            ? 'other event'
                                            : 'other events'}
                                    </p>
                                )}
                            </label>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
