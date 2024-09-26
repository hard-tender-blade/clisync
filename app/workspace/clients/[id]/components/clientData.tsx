import { Client } from '@/modules/shared/types/mainTypes'
import React from 'react'
import QuickNotes from './quickNotes'
import Note from './note'

export default function ClientData({
    client,
    setClient,
    setUpdate,
    handleSave,
    handleDelete,
    update,
}: {
    client: Client
    update: boolean
    setClient: (value: Client) => void
    setUpdate: (value: boolean) => void
    handleSave: () => void
    handleDelete: () => void
}) {
    return (
        <div>
            <div className="flex w-full gap-8">
                <div className="w-2/3">
                    <Note client={client} setClient={setClient} setUpdate={setUpdate} />
                </div>

                <div className="w-1/3">
                    <label className="form-control w-full">
                        <div className="label pb-[3px]">
                            <span className="label-text text-xs ">Name *</span>
                        </div>
                        <input
                            type="text"
                            placeholder={'name'}
                            value={client.name}
                            onChange={(e) => {
                                setUpdate(true)
                                setClient({ ...client, name: e.target.value })
                            }}
                            className="input input-xs input-bordered max-w-xs"
                        />
                    </label>
                    <label className="form-control w-full">
                        <div className="label pb-[3px]">
                            <span className="label-text text-xs">Email</span>
                        </div>
                        <input
                            type="text"
                            placeholder={'email'}
                            value={client.email}
                            onChange={(e) => {
                                setUpdate(true)
                                setClient({ ...client, email: e.target.value })
                            }}
                            className="input input-xs input-bordered max-w-xs"
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label pb-[3px]">
                            <span className="label-text text-xs">Phone number</span>
                        </div>
                        <input
                            type="text"
                            placeholder={'phone number'}
                            value={client.phoneNumber}
                            onChange={(e) => {
                                setUpdate(true)
                                setClient({ ...client, phoneNumber: e.target.value })
                            }}
                            className="input input-xs input-bordered max-w-xs"
                        />
                    </label>
                    <label className="form-control w-full">
                        <div className="label pb-[3px]">
                            <span className="label-text text-xs">Age</span>
                        </div>
                        <input
                            type="number"
                            value={client.age}
                            onChange={(e) => {
                                setUpdate(true)
                                setClient({
                                    ...client,
                                    age: parseInt(e.target.value),
                                })
                            }}
                            className="input input-xs input-bordered max-w-xs"
                        />
                    </label>
                    <QuickNotes
                        client={client}
                        setClient={setClient}
                        setUpdate={setUpdate}
                    />
                </div>
            </div>
        </div>
    )
}
