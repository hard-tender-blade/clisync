import publicConfig from '@/modules/shared/config/publicConfig'
import { SessionWithClient } from '@/modules/shared/types/mainTypes'
import CryptoManager from '../../utils/cryptoManager'

//todo use axios
const getSessionsOfTimeInterval = async (
    {
        start,
        end,
        cm,
    }: {
        start: string,
        end: string,
        cm: CryptoManager
    }
): Promise<SessionWithClient[]> => {
    console.log("start", start)

    const searchParams = new URLSearchParams()
    searchParams.append('start', start)
    searchParams.append('end', end)
    searchParams.append('clients', "true")


    const response = await fetch(
        `${publicConfig.next_public_origin}/api/sessions?${searchParams.toString()}`,
        {
            method: 'GET',
        },
    )
    const sessions = await response.json() as SessionWithClient[]
    if (!sessions) return []

    try {
        // Decrypt notes
        for (const session of sessions) {

            session.note = await cm.decryptData(session.note)
        }
    } catch (error) {
        console.error('Failed to decrypt notes', error)
    }

    return sessions
}
export default getSessionsOfTimeInterval
