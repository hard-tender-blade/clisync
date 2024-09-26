'use client'
import React from 'react'
import UserInfo from './userInfo/userInfo'
import { User } from '@/modules/shared/types/mainTypes'
import EditUserInfo from './userInfo/editUserInfo'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import Settings from './settings/settings'

export default function Content({ defaultUser }: { defaultUser: User }) {
    const [user, setUser] = React.useState<User>(defaultUser)
    const [section, setSection] = React.useState<JSX.Element>(<UserInfo {...user} />)
    const [editUserInfo, setEditUserInfo] = React.useState(false)

    const isUserInfoOrEditUserInfo =
        section.type === UserInfo || section.type === EditUserInfo

    return (
        <div className="flex">
            <Settings user={user} setUser={setUser} />
            <ul className="menu h-[90vh] w-1/4 rounded-box bg-base-200 text-lg">
                <li>
                    <button
                        onClick={() => {
                            setSection(<UserInfo {...user} />)
                        }}
                    >
                        Profile
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setSection(<></>)
                        }}
                    >
                        Settings
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setSection(<EditUserInfo user={user} />)
                        }}
                    >
                        Client settings
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setSection(<EditUserInfo user={user} />)
                        }}
                    >
                        Listed settings
                    </button>
                </li>
            </ul>
            <div>
                {isUserInfoOrEditUserInfo && (
                    <button
                        className={` ${editUserInfo ? 'btn-primary' : ''} btn btn-circle `}
                        onClick={() => {
                            if (editUserInfo) {
                                setSection(<UserInfo {...user} />)
                            } else {
                                setSection(<EditUserInfo user={user} />)
                            }
                            setEditUserInfo(!editUserInfo)
                        }}
                    >
                        <HiOutlinePencilSquare size={20} />
                    </button>
                )}
                {section}
            </div>
        </div>
    )
}
