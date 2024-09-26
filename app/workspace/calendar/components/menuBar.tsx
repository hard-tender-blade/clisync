import React from 'react'
import Link from 'next/link'

export default function MenuBar({
    viewType,
    children,
}: {
    viewType: 'month' | 'week' | 'day'
    children: React.ReactNode
}) {
    return (
        <div className="flex items-center gap-3 border-b border-solid border-base-300 p-2">
            <div className="join">
                <Link
                    href={`/workspace/calendar/month`}
                    className={`btn join-item ${viewType === 'month' ? 'disabled btn-primary' : ''}`}
                >
                    Month
                </Link>
                <Link
                    href={`/workspace/calendar/week`}
                    className={`btn join-item ${viewType === 'week' ? 'disabled btn-primary' : ''}`}
                >
                    Week
                </Link>
                <Link
                    href={`/workspace/calendar/day`}
                    className={`btn join-item ${viewType === 'day' ? 'disabled btn-primary' : ''}`}
                >
                    Day
                </Link>
            </div>

            {children}
        </div>
    )
}
