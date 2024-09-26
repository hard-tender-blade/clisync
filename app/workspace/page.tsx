import authMiddleware from '@/modules/shared/middleware/authMiddleware'
import Link from 'next/link'
import { FaAddressBook, FaRegCalendarAlt } from 'react-icons/fa'
import { IoPersonAdd } from 'react-icons/io5'
import WorkSpaceSideBarWrapper from './components/workSpaceSideBarWrapper'
import permanentRedirectSessionExpired from './utils/permanentRedirectSessionExpired'
import { Viewport } from 'next'
import Separator from '../components/separator'
import PX from '../components/px'

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width',
    viewportFit: 'cover',
}

export default function Page() {
    const { userId, lang } = authMiddleware()
    if (!userId || !lang) return permanentRedirectSessionExpired(`/workspace`)

    return (
        <main>
            <WorkSpaceSideBarWrapper currentPage="/workspace">
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
                        <div className="skeleton h-64 w-full md:w-96"></div>
                        <div className="skeleton h-64 w-full md:w-96"></div>
                    </div>

                    <Separator size="md" />
                </PX>
            </WorkSpaceSideBarWrapper>
        </main>
    )
}
