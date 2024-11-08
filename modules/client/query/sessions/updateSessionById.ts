import { Client, Session } from "../../../shared/types/mainTypes"
import CryptoManager from "../../utils/cryptoManager"


const updateSessionById = async (id: string, session: Session, cm: CryptoManager): Promise<Client | null> => {

    console.log('session', session)

    const encryptedNote = await cm.encryptData(session.note)
    session.note = encryptedNote

    console.log('session', session)

    const response = await fetch(`/api/sessions/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(session),
    })
    if (response.status !== 200) return null

    return response.json()
}
export default updateSessionById