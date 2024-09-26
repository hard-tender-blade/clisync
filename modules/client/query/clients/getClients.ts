import publicConfig from "@/modules/shared/config/publicConfig"
import { ClientsCursored, Cursor } from "@/modules/shared/types/cursor"

const getClients = async (cursor: Cursor, search?: string, token?: string): Promise<ClientsCursored | null> => {
    const searchParams = new URLSearchParams()
    searchParams.append('limit', cursor.limit.toString())
    searchParams.append('offset', cursor.offset.toString())
    if (search) searchParams.append('search', search)

    const response = await fetch(`${publicConfig.next_public_origin}/api/clients?${searchParams.toString()}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    if (response.status !== 200) return null

    const result = await response.json()
    return result
}
export default getClients