import publicConfig from "@/modules/shared/config/publicConfig"
import { User } from "@/modules/shared/types/mainTypes"

const getCurrentUser = async (token?: string): Promise<User | null> => {
    const response = await fetch(`${publicConfig.next_public_origin}/api/user`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })

    if (response.status !== 200) return null
    return response.json()
}
export default getCurrentUser
