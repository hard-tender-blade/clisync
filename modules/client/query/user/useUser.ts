import publicConfig from '@/modules/shared/config/publicConfig'
import { User } from '@/modules/shared/types/mainTypes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

// hook
export const useUser = () => {
    return useQuery<User>({
        queryKey: ['user'],
        queryFn: () => getUser(),
        staleTime: 1000 * 60 * 5,
        retry: false,
    })
}

// request
export const getUser = async (): Promise<User> => {
    const result = await axios({
        method: 'get',
        url: `${publicConfig.next_public_origin}/api/user`,
    })

    return result.data as User
}
