import publicConfig from '@/modules/shared/config/publicConfig'
import { SessionWithClient } from '@/modules/shared/types/mainTypes'

const getSessionsOfTimeInterval = async (
    {
        start,
        end,
        token,
    }: {
        start: string,
        end: string,
        token?: string,
    }
): Promise<SessionWithClient[] | null> => {
    const searchParams = new URLSearchParams()
    searchParams.append('start', start)
    searchParams.append('end', end)
    searchParams.append('clients', "true")

    const response = await fetch(
        `${publicConfig.next_public_origin}/api/sessions?${searchParams.toString()}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    )

    if (response.status !== 200) return null

    return response.json()
}
export default getSessionsOfTimeInterval
