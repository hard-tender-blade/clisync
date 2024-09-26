'use client'
import { Client } from '@/modules/shared/types/mainTypes'
import React, { useState } from 'react'
import WorkSpaceSideBarWrapper from '../../components/workSpaceSideBarWrapper'
import { showAlert } from '@/modules/client/utils/alert/alerts'
import showModal from '@/modules/client/utils/modal/modal'
import deleteClientById from '@/modules/client/query/clients/deleteClientById'
import updateClientById from '@/modules/client/query/clients/updateClientById'
import processQuickNotes from '@/modules/client/query/clients/processQuickNotes'
import ClientAttachments from './components/clientAttachments/clientAttachments'
import { Language } from '@/modules/client/languageInterface/language'
import ClientData from './components/clientData'
import { hideLoading, showLoading } from '@/modules/client/utils/loading/loadingModule'
import Sessions from './components/sessions/sessions'

export default function Content({
    client: clientDefault,
    lang,
}: {
    client: Client
    lang: Language
}) {
    const [client, setClient] = useState<Client>(clientDefault)
    const [update, setUpdate] = useState(false)

    const handleSave = async () => {
        if (!client) return
        showLoading()
        const updatedNotes = await processQuickNotes(client.id, client.quickNotes)
        if (!updatedNotes) {
            showAlert('error', 'short', 'Failed to update notes, contact support please.')
            hideLoading()
            return
        }

        const updateClient = await updateClientById(client.id, client)
        if (!updateClient) {
            showAlert(
                'error',
                'short',
                'Failed to update client, contact support please.',
            )
            hideLoading()
            return
        }
        hideLoading()
        setUpdate(false)
        showAlert('success', 'short', 'Client updated successfully')
    }

    const handleDelete = async () => {
        showModal({
            title: 'Delete client',
            content: 'Are you sure you want to delete this client?',
            onConfirm: async () => {
                if (!client) return
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
        <WorkSpaceSideBarWrapper currentPage="/workspace/clients">
            <div className="flex w-full flex-col">
                <div className="flex items-center gap-4">
                    <h1 className="text-4xl">{client.name}</h1>
                    {update && (
                        <button
                            onClick={handleSave}
                            className="btn btn-outline btn-primary btn-sm px-4"
                        >
                            Save
                        </button>
                    )}
                    <button
                        className="btn btn-outline btn-error btn-sm"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>

                <p className="tiny-text">client: {client.id}</p>

                <ClientData
                    client={client}
                    setClient={setClient}
                    setUpdate={setUpdate}
                    update={update}
                    handleSave={handleSave}
                    handleDelete={handleDelete}
                />
                <div className="divider my-6" />

                <ClientAttachments client={client} setClient={setClient} />
                <div className="divider my-6" />

                <Sessions client={client} setClient={setClient} />
            </div>
        </WorkSpaceSideBarWrapper>
    )
}
