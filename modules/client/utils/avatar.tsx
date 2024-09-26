import React from 'react'
import avatar from 'gradient-avatar'

export default function Avatar({ id, s }: { id: string; s: number }) {
    return (
        <div
            className="overflow-hidden rounded-full"
            style={{ width: s, height: s }}
            dangerouslySetInnerHTML={{ __html: avatar(id, 64) }}
        />
    )
}
