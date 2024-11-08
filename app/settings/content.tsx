import Link from 'next/link'
import { IoChevronBack } from 'react-icons/io5'
import PC from '../components/pc'
import { useState } from 'react'
import ConnectGoogleCalendarButton from './components/ConnectGoogleCalendar'
import UserInfo from './components/userInfo/userInfo'
import TwoFA from './components/twoFA'

enum SettingsPages {
    userInfo,
    workspace,
    googleCalendar,
    twoFA,
}

export default function Content() {
    const [menuPosition, setMenuPosition] = useState('absolute top-28')

    const [selectedPage, setSelectedPage] = useState(SettingsPages.userInfo)

    const handleSelectSettingsPage = (page: SettingsPages) => {
        setSelectedPage(page)
    }

    const settingsPage = () => {
        switch (selectedPage) {
            case SettingsPages.userInfo:
                return <UserInfo />
            case SettingsPages.workspace:
                return <div>workspace settings</div>
            case SettingsPages.googleCalendar:
                return <ConnectGoogleCalendarButton />
            case SettingsPages.twoFA:
                return <TwoFA />
            default:
                return null
        }
    }

    document.addEventListener('scroll', (e) => {
        // stick settings menu to the top on scroll
        console.log(window.scrollY)
        if (window.scrollY > 112) {
            setMenuPosition('fixed top-0')
        } else {
            setMenuPosition('absolute top-28')
        }
    })

    return (
        <div className="overflow-hidden">
            <div className="flex w-full flex-col items-center justify-center">
                <div className="flex h-28 w-full flex-row items-center justify-start border-b-2 border-b-border_gray bg-gray marker:h-28">
                    <Link href={`/workspace`} className="btn absolute left-4 shadow-none">
                        <IoChevronBack />
                        <PC>Workspace</PC>
                    </Link>
                    <div className="ml-[15%] flex h-full items-center justify-start">
                        <h3 className="flex">Settings</h3>
                    </div>
                </div>
            </div>
            <ul className={`${menuPosition} menu ml-[15%] w-56 pl-0`}>
                <li>
                    <a
                        onClick={() => {
                            handleSelectSettingsPage(SettingsPages.userInfo)
                        }}
                        className={`${selectedPage == SettingsPages.userInfo ? 'font-bold' : ''}`}
                    >
                        User Info
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            handleSelectSettingsPage(SettingsPages.workspace)
                        }}
                        className={`${selectedPage == SettingsPages.workspace ? 'font-bold' : ''}`}
                    >
                        Workspace
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            handleSelectSettingsPage(SettingsPages.googleCalendar)
                        }}
                        className={`${selectedPage == SettingsPages.googleCalendar ? 'font-bold' : ''}`}
                    >
                        Google Calendar
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            handleSelectSettingsPage(SettingsPages.twoFA)
                        }}
                        className={`${selectedPage == SettingsPages.twoFA ? 'font-bold' : ''}`}
                    >
                        2FA
                    </a>
                </li>
            </ul>
            <div className="ml-[15%] mr-[15%] flex flex-row">
                <div className="ml-56 w-full pl-4 pt-3"> {settingsPage()}</div>
            </div>
        </div>
    )
}
