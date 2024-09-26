import OwnPicker from '@/app/workspace/clients/[id]/components/ownPicker/ownPicker'
import ModalV2 from '@/modules/client/utils/modalV2/modalV2'
import React, { useEffect, useState } from 'react'
import Search from './components/search'
import { Client, User } from '@/modules/shared/types/mainTypes'
import Avatar from '@/modules/client/utils/avatar'
import { IoClose, IoWarningOutline } from 'react-icons/io5'
import { showAlert } from '@/modules/client/utils/alert/alerts'
import createNewSession from '@/modules/client/query/sessions/createSession'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { hideLoading, showLoading } from '@/modules/client/utils/loading/loadingModule'

export default function CreateSessionModal({
    isOpen,
    requestClose,
    data,
}: {
    isOpen: boolean
    requestClose: () => void
    data: { open: boolean; date: moment.Moment; hours: number; user: User }
}) {
    const [client, setClient] = useState<Client | null>(null)

    const [start, setStart] = useState<Date | null>(null)
    const [end, setEnd] = useState<Date | null>(null)

    const [addToUserGoogleCalendar, setAddToUserGoogleCalendar] = useState(
        data.user.googleCalendarConnected,
    )

    //todo implement notifications for user and client
    //todo add user email check if user has it
    const [inviteClientOnGoogleCalendarEvent, setInviteClientOnGoogleCalendarEvent] =
        useState(data.user.googleCalendarConnected)
    const [note, setNote] = useState('')

    const router = useRouter()

    useEffect(() => {
        setStart(data.date.clone().hour(data.hours).minute(0).toDate())
        setEnd(
            data.date
                .clone()
                .hour(data.hours + 1)
                .minute(0)
                .toDate(),
        )
    }, [data])

    const handleClose = () => {
        setClient(null)
        requestClose()
    }

    const handleCreateSession = async () => {
        if (!client) {
            showAlert('warning', 'short', 'Please select a client')
            handleClose()
            return
        }
        if (!start || !end) {
            showAlert('warning', 'short', 'Please select a time')
            handleClose()
            return
        }

        showLoading()
        const res = await createNewSession({
            clientId: client.id,
            start: start.toISOString(),
            end: end.toISOString(),
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            addToUserGoogleCalendar: addToUserGoogleCalendar,
            inviteClientOnGoogleCalendarEvent: inviteClientOnGoogleCalendarEvent,
            note,
        })
        if (!res) {
            showAlert(
                'error',
                'short',
                'Failed to create session, contact support please',
            )
            handleClose()
            hideLoading()
            return
        }
        router.refresh()
        showAlert('success', 'short', 'Session created successfully')
        hideLoading()
        handleClose()
    }

    if (!isOpen || !start || !end) return null

    return (
        <ModalV2 requestClose={handleClose}>
            <div className="flex flex-col gap-4">
                <h3>Create new session</h3>
                <div>
                    <p className="p-bold">Time *</p>
                    <div className="flex gap-2">
                        <OwnPicker date={start} setDate={setStart} showMonth={false} />
                        {' - '}
                        <OwnPicker date={end} setDate={setEnd} showMonth={false} />
                    </div>
                </div>
                <div>
                    <p className="p-bold">Client *</p>
                    {client ? (
                        <div className="flex w-full items-center gap-2">
                            <div className="h-hull flex items-center gap-2 py-4">
                                <Avatar id={client.id} s={16} />
                                <span>{client.name}</span>
                            </div>
                            <button
                                className="btn btn-sm"
                                onClick={() => setClient(null)}
                            >
                                <IoClose />
                            </button>
                        </div>
                    ) : (
                        <Search setClient={setClient} />
                    )}
                </div>

                <div>
                    <p className="p-bold">Note</p>
                    <textarea
                        className="textarea textarea-bordered w-full"
                        value={note}
                        placeholder='e.g. "Client is coming with a friend"'
                        onChange={(e) => setNote(e.target.value)}
                    />
                </div>

                <div>
                    {!data.user.googleCalendarConnected && (
                        <div className="flex items-center gap-2 py-1">
                            <IoWarningOutline color="red" />
                            <p className="text-xs text-warning">
                                You need to connect your Google Calendar to use this
                                feature.{' '}
                                <Link
                                    href={'/settings/googleCalendar'}
                                    className="text-blue underline"
                                >
                                    Visit settings.
                                </Link>
                            </p>
                        </div>
                    )}
                    <div
                        className={
                            !data.user.googleCalendarConnected
                                ? 'pointer-events-none opacity-30'
                                : undefined
                        }
                    >
                        <p className="p-bold">Other</p>
                        <label className="label w-min cursor-pointer gap-6">
                            <span className="label-text whitespace-nowrap">
                                Add to my Google Calendar
                            </span>
                            <input
                                type="checkbox"
                                className="toggle toggle-primary"
                                checked={addToUserGoogleCalendar}
                                onChange={() =>
                                    setAddToUserGoogleCalendar(!addToUserGoogleCalendar)
                                }
                            />
                        </label>

                        <label className="label w-min cursor-pointer gap-6">
                            <span className="label-text whitespace-nowrap">
                                Invite client on Google Calendar event
                            </span>
                            <input
                                type="checkbox"
                                className="toggle toggle-primary"
                                checked={inviteClientOnGoogleCalendarEvent}
                                onChange={() =>
                                    setInviteClientOnGoogleCalendarEvent(
                                        !inviteClientOnGoogleCalendarEvent,
                                    )
                                }
                            />
                        </label>
                    </div>
                </div>

                <button
                    onClick={handleCreateSession}
                    className={`btn ${client ? 'btn-primary' : 'btn-disabled'} w-full`}
                >
                    Create session
                </button>
            </div>
        </ModalV2>
    )
}
