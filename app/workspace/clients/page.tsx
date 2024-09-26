import authMiddleware from '@/modules/shared/middleware/authMiddleware'
import { NextRequest } from 'next/server'
import { notFound } from 'next/navigation'
import Content from './content'
import getClients from '@/modules/client/query/clients/getClients'
import { Cursor } from '@/modules/shared/types/cursor'
import getClientsCount from '@/modules/client/query/clients/getClientsCount'
import { DEFAULT_CLIENTS_LIST_LIMIT } from '@/modules/shared/constants/constants'
import permanentRedirectSessionExpired from '../utils/permanentRedirectSessionExpired'

export default async function Page(
    {
        searchParams,
    }: {
        searchParams: {
            limit?: string
            offset?: string
            search?: string
        }
    },
    request: NextRequest,
) {
    const { userId, lang, token } = authMiddleware(request)
    if (!userId || !token || !lang)
        return permanentRedirectSessionExpired(`/workspace/clients`)

    const cursor: Cursor = {
        limit: parseInt(searchParams.limit || DEFAULT_CLIENTS_LIST_LIMIT.toString()),
        offset: parseInt(searchParams.offset || '0'),
    }

    const [clientsCursored, clientsCount] = await Promise.all([
        getClients(cursor, searchParams.search, token),
        getClientsCount(token),
    ])
    console.log(!clientsCursored, !clientsCount)
    if (!clientsCursored || clientsCount === null) return notFound()

    const allPages = Math.ceil(clientsCount / cursor.limit)
    const currentPage = Math.ceil(cursor.offset / cursor.limit) + 1

    const prevCursor: Cursor | null =
        cursor.offset - cursor.limit >= 0
            ? { ...cursor, offset: cursor.offset - cursor.limit }
            : null

    return (
        <main>
            <Content
                clients={clientsCursored.data}
                nextCursor={clientsCursored.nextCursor}
                prevCursor={prevCursor}
                allPages={allPages}
                currentPage={currentPage}
                lang={lang}
            />
        </main>
    )
}
