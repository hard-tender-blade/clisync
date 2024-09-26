import updateUser from '@/modules/client/query/user/updateUser'
import { showAlert } from '@/modules/client/utils/alert/alerts'
import { User } from '@/modules/shared/types/mainTypes'
import React, { useState } from 'react'

export default function EditUserInfo({ user }: { user: User }) {
    // Person
    const [name, setName] = useState(user.name)
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)
    const [email, setEmail] = useState(user.email)

    // Job
    const [jobTitle, setJobTitle] = useState(user.jobTitle)
    const [experience, setExperience] = useState(user.experience)
    const [isClinicPsychologist, setIsClinicPsychologist] = useState(
        user.isClinicPsychologist,
    )

    // Services
    const [onlineService, setOnlineService] = useState(user.onlineService)
    const [inPersonService, setInPersonService] = useState(user.inPersonService)

    // Place
    const [country, setCountry] = useState(user.country)
    const [city, setCity] = useState(user.city)
    const [address, setAddress] = useState(user.address)
    const [postalCode, setPostalCode] = useState(user.postalCode)

    // About me
    const [aboutMe, setAboutMe] = useState(user.aboutMe)
    const [status, setStatus] = useState(user.status)
    const [website, setWebsite] = useState(user.website)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const success = await updateUser({
            id: user.id,
            name,
            phoneNumber,
            email,
            jobTitle,
            experience,
            isClinicPsychologist,
            onlineService,
            inPersonService,
            country,
            city,
            address,
            postalCode,
            aboutMe,
            status,
            website,
            lang: user.lang,
            googleCalendarConnected: user.googleCalendarConnected,
            googleAuth: user.googleAuth,
        })
        if (!success) {
            showAlert(
                'error',
                'short',
                'Failed to update profile please try again later or contact support',
            )
            return
        }
        showAlert('success', 'short', 'Profile updated successfully')
    }
    return (
        <section className="px-8 ">
            <h1 className="mb-4 text-2xl font-bold">User Profile</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Name</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={user.name}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Phone Number</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder={user.phoneNumber}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={user.email}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Experience</span>
                    </div>
                    <input
                        type="number"
                        className="input input-bordered w-full max-w-xs"
                        value={experience}
                        onChange={(e) => setExperience(Number(e.target.value))}
                        placeholder={`${user.experience} years`}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">In Person Service</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={inPersonService ? 'Yes' : 'No'}
                        onChange={(e) => setInPersonService(e.target.value === 'Yes')}
                        placeholder={user.inPersonService ? 'Yes' : 'No'}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Clinic Psychologist</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={isClinicPsychologist ? 'Yes' : 'No'}
                        onChange={(e) =>
                            setIsClinicPsychologist(e.target.value === 'Yes')
                        }
                        placeholder={user.isClinicPsychologist ? 'Yes' : 'No'}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Job Title</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder={user.jobTitle}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">City</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder={user.city}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Country</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder={user.country}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Address</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder={user.address}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Postal Code</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        placeholder={user.postalCode}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">About Me</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={aboutMe}
                        onChange={(e) => setAboutMe(e.target.value)}
                        placeholder={user.aboutMe}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Online Service</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={onlineService ? 'Yes' : 'No'}
                        onChange={(e) => setOnlineService(e.target.value === 'Yes')}
                        placeholder={user.onlineService ? 'Yes' : 'No'}
                    />
                </label>
                {/* <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Phone Number</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder={user.phoneNumber}
                    />
                </label> */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Status</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        placeholder={user.status}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Website</span>
                    </div>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder={user.website}
                    />
                </label>
                <label className="form-control w-full max-w-xs md:col-start-3">
                    <div className="label">
                        <span className="label-text">Save changed?</span>
                    </div>

                    <button onClick={handleSubmit} className="btn btn-primary">
                        Edit
                    </button>
                </label>
            </div>
        </section>
    )
}
