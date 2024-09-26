import { User } from '@/modules/shared/types/mainTypes'
import db from './sequelize/squelize'

interface UserCreate {
    id: string
    lang: string
    email: string
    name?: string
    googleAuth: boolean
    googleCalendarConnected: boolean
}
const create = async (data: UserCreate): Promise<User | null> => {
    const userCreated = await db.users.create({
        id: data.id,
        lang: data.lang,
        email: data.email,
        googleAuth: data.googleAuth,
        googleCalendarConnected: data.googleCalendarConnected,
    })
    return userCreated.dataValues
}

const getById = async (id: string): Promise<User | null> => {
    const user = await db.users.findOne({
        where: {
            id,
        },
    })
    if (!user) return null
    return user.dataValues
}

const getByEmail = async (email: string): Promise<User | null> => {
    const user = await db.users.findOne({
        where: {
            email,
        },
    })
    if (!user) return null
    return user.dataValues
}
const update = async (id: string, data: User): Promise<User | null> => {
    const updatedUser = await db.users.update(data, {
        where: {
            id,
        },
    })
    if (!updatedUser) return null
    return getById(id)
}

const usersController = {
    create,
    getById,
    getByEmail,
    update,
}
export default usersController
