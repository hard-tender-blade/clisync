import { User } from '@/modules/shared/types/mainTypes'
import React from 'react'

export default function UserInfo(user: User) {
    return (
        <section className="px-8 ">
            <h1 className="mb-4 text-2xl font-bold">User Profile</h1>
            <div className="grid grid-cols-1 justify-evenly gap-4  md:grid-cols-3">
                {/* <div className="flex flex-col">
                    <p>ID:</p>
                    <p className="p-2 py-5">{user.id}</p>
                </div> */}
                <div className="flex flex-col">
                    <p className="label-text">Name:</p>
                    <p className="p-2 py-5">{user.name}</p>
                </div>
                <div className="flex flex-col">
                    <p className="label-text">Phone Number:</p>
                    <p className="p-2 py-5">{user.phoneNumber}</p>
                </div>
                <div className="flex flex-col">
                    <p className="label-text">Email:</p>
                    <p className="p-2 py-5">{user.email}</p>
                </div>
                <div className="flex flex-col">
                    <p className="label-text">Experience:</p>
                    <p className="p-2 py-5">{user.experience} years</p>
                </div>
                <div className="flex flex-col">
                    <p className="label-text">In Person Service:</p>
                    <p className="p-2 py-5">{user.inPersonService ? 'Yes' : 'No'}</p>
                </div>
                <div className="flex flex-col">
                    <p className="label-text">Clinic Psychologist:</p>
                    <p className="p-2 py-5">{user.isClinicPsychologist ? 'Yes' : 'No'}</p>
                </div>
                <div className="flex flex-col">
                    <p className="label-text">Job Title:</p>
                    <p className="p-2 py-5">{user.jobTitle}</p>
                </div>
                <div className="flex flex-col">
                    <p className="label-text">City:</p>
                    <p className="p-2 py-5">{user.city}</p>
                </div>

                <div className="flex flex-col">
                    <p className="label-text">Country:</p>
                    <p className="p-2 py-5">{user.country}</p>
                </div>
                <div className="flex flex-col">
                    <p className="label-text">Address:</p>
                    <p className="p-2 py-5">{user.address}</p>
                </div>
                <div className="flex flex-col">
                    <p className="label-text">Postal Code:</p>
                    <p className="p-2 py-5">{user.postalCode}</p>
                </div>
                <div className="flex flex-col">
                    <p className="label-text">About Me:</p>
                    <p className="p-2 py-5">{user.aboutMe}</p>
                </div>
                <div className="flex flex-col">
                    <p className="label-text">Online Service:</p>
                    <p className="p-2 py-5">{user.onlineService ? 'Yes' : 'No'}</p>
                </div>

                <div className="flex flex-col">
                    <p className="label-text">Status:</p>
                    <p className="p-2 py-5">{user.status}</p>
                </div>
                <div className="flex flex-col">
                    <p className="label-text">Website:</p>
                    <a href={user.website} className="text-blue-500 p-4">
                        {user.website}
                    </a>
                </div>
            </div>
        </section>
    )
}
