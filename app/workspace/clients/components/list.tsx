import { Client } from '@/modules/shared/types/mainTypes'
import React from 'react'
import DropDown from './dropDown'
import Avatar from '@/modules/client/utils/avatar'
import Link from 'next/link'
import { Language } from '@/modules/client/languageInterface/language'

export default function List({
    clients,
    lang,
}: {
    clients: Client[] | undefined
    lang: Language
}) {
    return (
        <div className="mt-6  ">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className="pl-0">Name</th>
                        <th className="hidden md:block">Tags</th>
                        <th className="hidden md:block">Email</th>
                        <th className="hidden md:block">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {clients &&
                        clients.map((client) => (
                            <tr
                                key={client.id}
                                className="hover h-14 rounded-sm hover:cursor-pointer"
                            >
                                <td className="p-0">
                                    <Link
                                        href={`/workspace/clients/${client.id}`}
                                        className="flex h-full w-full items-center gap-3 hover:underline"
                                    >
                                        <Avatar id={client.id} s={32} />
                                        <div className="text-xl font-bold">
                                            {client.name}
                                        </div>
                                    </Link>
                                </td>
                                <td className="hidden md:block">add tags</td>
                                <td className="hidden md:block">{client.email}</td>
                                <td className="hidden md:block">{client.phoneNumber}</td>
                                <th className="hidden justify-end md:flex">
                                    <DropDown client={client} lang={lang} />
                                </th>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className="flex flex-col gap-2">
                {!clients &&
                    [1, 2, 3, 4].map((index) => (
                        <div
                            key={index}
                            className="skeleton h-16 w-full rounded-md"
                        ></div>
                    ))}
            </div>
        </div>
    )
}
