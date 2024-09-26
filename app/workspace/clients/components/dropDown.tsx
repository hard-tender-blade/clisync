'use client'
import deleteClientById from '@/modules/client/query/clients/deleteClientById'
import { Client } from '@/modules/shared/types/mainTypes'
import { showAlert } from '@/modules/client/utils/alert/alerts'
import showModal from '@/modules/client/utils/modal/modal'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegTrashAlt } from 'react-icons/fa'
import { RxOpenInNewWindow } from 'react-icons/rx'
import Link from 'next/link'
import { Language } from '@/modules/client/languageInterface/language'

export default function DropDown({ client, lang }: { client: Client; lang: Language }) {
    const handleDelete = async () => {
        showModal({
            title: 'Delete client',
            content: 'Are you sure you want to delete this client?',
            onConfirm: async () => {
                if (!client) return
                // if (!selectedPage) return
                const ok = await deleteClientById(client.id)
                if (!ok) {
                    showAlert(
                        'error',
                        'short',
                        'Failed to delete client, contact support please.',
                    )
                    return
                }
                showAlert('success', 'short', 'Client deleted successfully')

                await new Promise((resolve) => setTimeout(resolve, 100))

                window.location.reload()
            },
            onCancel: async () => {},
            confirmText: 'Delete',
            cancelText: 'Cancel',
            confirmClass: 'btn btn-error btn-outline',
            cancelClass: 'btn',
        })
        return null
    }

    return (
        <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                <BsThreeDots className="h-5 w-5" />
            </div>
            <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
            >
                <li>
                    <Link
                        href={`/workspace/clients/${client.id}`}
                        target="_blank"
                        className="flex items-center"
                    >
                        <RxOpenInNewWindow className="h-4 w-4" />
                        <span>Open in new tab</span>
                    </Link>
                </li>
                <li>
                    <button
                        onClick={handleDelete}
                        className="btn-error flex items-center text-error outline hover:bg-error hover:text-white hover:outline"
                    >
                        <FaRegTrashAlt className="h-4 w-4" />
                        <span>Delete</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}
