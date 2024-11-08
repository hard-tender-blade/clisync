import { SessionWithClient } from "@/modules/shared/types/mainTypes"
import { CreateSessionRequest } from "../../../shared/types/subTypes"

const createNewSession = async (session: CreateSessionRequest): Promise<SessionWithClient | null> => {
    const response = await fetch(`/api/sessions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(session),
    })

    if (!response.ok || response.status !== 200) return null
    return response.json()
}
export default createNewSession