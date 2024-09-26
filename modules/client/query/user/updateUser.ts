import publicConfig from '@/modules/shared/config/publicConfig'
import { User } from '@/modules/shared/types/mainTypes'

const updateUser = async (user: User): Promise<User | null> => {
    const response = await fetch(`${publicConfig.next_public_origin}/api/user`, {
        method: 'PUT',
        body: JSON.stringify(user),
    })

    if (response.status !== 200) return null
    const data = await response.json()

    return data
}
export default updateUser
