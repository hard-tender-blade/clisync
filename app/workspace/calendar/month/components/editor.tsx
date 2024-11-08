import React, { useEffect } from 'react'
import { useMonthCalendar } from '../context/monthCalendarContext'
import updateSessionById from '@/modules/client/query/sessions/updateSessionById'
import { showAlert } from '@/modules/client/utils/alert/alerts'
import { hideLoading, showLoading } from '@/modules/client/utils/loading/loadingModule'
import CryptoManager from '@/modules/client/utils/cryptoManager'

export default function Editor() {
    const { selectedSession, setSelectedSession } = useMonthCalendar()
    const [cm, setCm] = React.useState<CryptoManager>()

    useEffect(() => {
        const loadCm = async () => {
            const cm = new CryptoManager()
            await cm.initialize()
            setCm(cm)
        }
        loadCm()
    }, [])

    const handleSaveSession = async () => {
        if (!selectedSession || !cm) return

        showLoading()
        try {
            const res = await updateSessionById(selectedSession.id, selectedSession, cm)
            if (res) {
                showAlert('success', 'mid', 'Session saved successfully')
            } else {
                showAlert('error', 'mid', 'Failed to save session')
            }
        } catch (error) {
            showAlert('error', 'mid', 'Failed to save session')
            hideLoading()
        }

        hideLoading()
    }

    if (!selectedSession || !cm) {
        return null
    }

    return (
        <div className="flex h-full w-full flex-col items-center">
            <button className="btn btn-primary mt-10" onClick={handleSaveSession}>
                Save
            </button>

            <textarea
                className="h-full w-full border-0 px-32 pb-12 pt-12 focus:outline-none"
                value={selectedSession?.note}
                onChange={(e) => {
                    setSelectedSession({
                        ...selectedSession!,
                        note: e.target.value,
                    })
                }}
                placeholder="Type your note here..."
            />
        </div>
    )
}
