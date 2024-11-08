'use client'

import Link from 'next/link'
import { FaRegCalendarAlt, FaAddressBook } from 'react-icons/fa'
import { IoPersonAdd } from 'react-icons/io5'
import PX from '../components/px'
import Separator from '../components/separator'
import { useClients } from '@/modules/client/query/clients/useClients'
import { useQuery } from '@tanstack/react-query'

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

export default function Content() {
    const { data: posts, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 1000 * 60 * 5,
    })

    return (
        <>
            <Separator size="lg" />

            <PX className="flex flex-col">
                <h1>Quick Actions</h1>
                <div className="mt-5 flex flex-wrap gap-3 md:w-1/2">
                    <Link href="/workspace/calendar/month" className="btn">
                        <FaRegCalendarAlt />
                        <span>Calendar</span>
                    </Link>

                    <Link href="/workspace/clients" className="btn">
                        <FaAddressBook />
                        <span>My clients</span>
                    </Link>

                    <Link href="/workspace/clients/new" className="btn">
                        <IoPersonAdd />
                        <span>New client</span>
                    </Link>

                    <button className="btn btn-disabled">Edit tags</button>
                    <button className="btn btn-disabled">Profile settings</button>
                    <button className="btn btn-disabled">Schedule session?</button>
                </div>

                <Separator size="md" />

                <h3>Clisync updates</h3>
                <div className="mt-5 flex w-full flex-col gap-3 md:w-2/3">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-32 w-full"></div>
                </div>

                <Separator size="md" />

                <h3>Featured articles</h3>
                <div className="mt-5 flex w-full flex-col gap-3 md:flex-row">
                    {isLoading ? (
                        <div className="skeleton h-32 w-full"></div>
                    ) : (
                        posts &&
                        posts.map((post: any) => (
                            <div key={post.id} className="card w-full">
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        ))
                    )}
                </div>

                <Separator size="md" />
            </PX>
        </>
    )
}
