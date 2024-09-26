import { Client } from '@/modules/shared/types/mainTypes'

import React from 'react'
import Session from './session'
import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'

export default function Sessions({
    client,
    setClient,
}: {
    client: Client
    setClient: (client: Client) => void
}) {
    return (
        <div className=" flex flex-col gap-12">
            <h2>Sessions</h2>
            <Link href={'/workspace/calendar/month'} className="btn btn-primary w-fit">
                <FaRegCalendarAlt />
                Create session in calendar
            </Link>
            {client.sessions.map((s, i) => (
                <Session key={s.id} session={s} client={client} setClient={setClient} />
            ))}
        </div>
    )
}
