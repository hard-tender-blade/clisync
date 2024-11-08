import publicConfig from '@/modules/shared/config/publicConfig'
import { User } from '@/modules/shared/types/mainTypes'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { queryClient } from '../../queryClient'

export const useMutateUser = () => {
    return useMutation({
        mutationFn: updateUser,
        onSuccess: (data) => {
            queryClient.setQueryData(['user'], data)
        },
    })
}

export const updateUser = async (user: User): Promise<User> => {
    const response = await axios({
        method: 'put',
        url: `${publicConfig.next_public_origin}/api/user`,
        data: JSON.stringify(user),
    })

    return response.data as User
}
