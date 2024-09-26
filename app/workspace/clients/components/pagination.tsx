import { Cursor } from '@/modules/shared/types/cursor'
import Link from 'next/link'
import React from 'react'

export default function Pagination({
    nextCursor,
    prevCursor,
    allPages,
    currentPage,
}: {
    nextCursor: Cursor | null
    prevCursor: Cursor | null
    allPages: number
    currentPage: number
}) {
    const nextHref = nextCursor
        ? `/workspace/clients?limit=${nextCursor.limit}&offset=${nextCursor.offset}`
        : ''
    const prevHref = prevCursor
        ? `/workspace/clients?limit=${prevCursor.limit}&offset=${prevCursor.offset}`
        : ''

    return (
        <div className="join max-w-xs">
            <Link
                href={prevHref}
                className={`btn ${!prevCursor && 'btn-disabled'} join-item`}
            >
                «
            </Link>
            <div className="btn join-item">
                {currentPage}/{allPages}
            </div>
            <Link
                href={nextHref}
                className={`btn ${!nextCursor && 'btn-disabled'} join-item`}
            >
                »
            </Link>
        </div>
    )
}
