import { Client, Session } from "../../../shared/types/mainTypes"


const updateSessionById = async (id: string, session: Session): Promise<Client | null> => {
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