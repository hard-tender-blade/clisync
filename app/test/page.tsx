'use client'
import getSessionsOfTimeInterval from '@/modules/client/query/sessions/getSessionsOfTimeInterval'
import React from 'react'
import getCurrentUser from '@/modules/client/query/user/getCurrentUser'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from './fb'

export default function Page() {
    const handleClick = async () => {
        const user = await getCurrentUser()

        const fetchStart = new Date().getTime()
        const sessions = await getSessionsOfTimeInterval({
            start: new Date('2024-01-01').toISOString(),
            end: new Date('2024-12-31').toISOString(),
        })
        console.log('supa time:', new Date().getTime() - fetchStart)

        const fetchStart2 = new Date().getTime()
        const q = query(
            collection(db, 'sessions'),
            where('start', '<', new Date('2024-08-21').toISOString()),
            where('end', '>', new Date('2024-08-16').toISOString()),
        )

        const querySnapshot = await getDocs(q)
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, ' => ', doc.data())
        // })
        console.log('fire time 2:', new Date().getTime() - fetchStart2)

        // sessions?.forEach(async (session) => {
        //     setDoc(doc(db, 'sessions', session.id), {
        //         ...session,
        //         clientId: session.client.id,
        //         client: null,
        //         userId: user?.id,
        //     })
        // })

        console.log('Done')
    }

    return (
        <div>
            Page
            <button onClick={handleClick}>Click</button>
        </div>
    )
}
