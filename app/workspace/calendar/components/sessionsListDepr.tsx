import React from 'react'
import moment from 'moment'
import { IoPerson, IoTimeOutline } from 'react-icons/io5'
import { HiPencilAlt } from 'react-icons/hi'
import Link from 'next/link'
import { Day } from '@/modules/shared/types/calendar'

export default function SessionsList({ data }: { data: Day }) {
    return (
        <div className="flex flex-col p-4">
            <h1>
                {moment(data.date).format('MM.DD')} {data.weekday}
            </h1>
            {/* <p className="tiny-text">{data.today}</p> */}

            <div className="flex w-full flex-col">
                {data.sessions.map((session, i) => (
                    <div key={i} className="flex flex-col">
                        <div className=" flex w-full flex-col gap-4 rounded-xl border-2 border-solid border-base-200 p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1">
                                        {moment(session.start).format('HH:mm')} -{' '}
                                        {moment(session.start).format('HH:mm')}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <p>1H</p>
                                        <IoTimeOutline />
                                    </div>
                                </div>
                                <div>
                                    <p>in 32m</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <h3>Jakub Klucky</h3>
                                <div className="flex items-center gap-2">
                                    <Link
                                        href={`/workspace/clients/${session.clientId}`}
                                        className="btn btn-sm h-12 w-12 rounded-full "
                                    >
                                        <IoPerson />
                                    </Link>

                                    <button className="btn btn-sm h-12 w-12 rounded-full ">
                                        <HiPencilAlt />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* //divider */}
                        <div>
                            {i !== data.sessions.length - 1 && (
                                <div className="divider">
                                    <p>
                                        {
                                            // time difference between sessions
                                            moment(data.sessions[i + 1].start).diff(
                                                moment(session.start),
                                                'hours',
                                            )
                                        }
                                        {' H'}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
