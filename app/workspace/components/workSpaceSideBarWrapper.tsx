'use client'
import MOB from '@/app/components/mob'
import PC from '@/app/components/pc'
import Link from 'next/link'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaAddressBook, FaCalendarAlt } from 'react-icons/fa'
import ThemeSwitch from './themeSwitch'

const workspacePages = [
    {
        icon: <AiFillHome />,
        path: '/workspace',
        label: 'Home',
    },
    {
        icon: <FaCalendarAlt />,
        path: '/workspace/calendar',
        label: 'Calendar',
    },
    {
        icon: <FaAddressBook />,
        path: '/workspace/clients',
        label: 'My clients',
    },
]

export default function WorkSpaceSideBarWrapper({
    children,
    currentPage,
}: {
    children: React.ReactNode
    currentPage: string
}) {
    const [currentPageIndex, setCurrentPageIndex] = React.useState(-1)

    React.useEffect(() => {
        workspacePages.forEach((page, index) => {
            if (currentPage.includes(page.path)) {
                setCurrentPageIndex(index)
                return
            }
        })
    }, [currentPage])

    return (
        <div className="flex h-full w-full">
            <PC className="min-h-screen w-16 border-r border-solid border-base-300 p-2">
                <div className="flex h-full flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        {workspacePages.map((page, i) => (
                            <div
                                key={page.path}
                                className="tooltip tooltip-right"
                                data-tip={page.label}
                            >
                                <Link
                                    href={page.path}
                                    className={`btn ${i === currentPageIndex && 'btn-primary'}`}
                                >
                                    {page.icon}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <ThemeSwitch />
                </div>
            </PC>

            <div className="no-scrollbar h-screen w-full overflow-y-scroll">
                {children}
            </div>

            <MOB>
                <div className="h-16 w-full bg-red"></div>
                <div className="btm-nav z-[300]">
                    {workspacePages.map((page, i) => (
                        <Link
                            key={page.path}
                            href={page.path}
                            className={`${i === currentPageIndex && 'active text-primary'}`}
                        >
                            {page.icon}
                        </Link>
                    ))}
                </div>
            </MOB>
        </div>
    )
}
