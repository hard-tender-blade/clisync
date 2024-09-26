import React from 'react'
import getCurrentUser from '@/modules/client/query/user/getCurrentUser'
import authMiddleware from '@/modules/shared/middleware/authMiddleware'
import { notFound, permanentRedirect } from 'next/navigation'
import Content from './components/content'
import languageInterface from '@/modules/client/languageInterface/language'
import NavbarPublic from '@/app/components/navbar/navbar'

export default async function page() {
    const { userId, token } = authMiddleware()
    if (!userId || !token) return permanentRedirect(`/sign-in`) //todo add func that it will show some message

    const user = await getCurrentUser(token)

    if (!user) return notFound()
    if (!languageInterface.supportedLanguages.includes(user.lang)) return notFound()

    return (
        <main>
            <NavbarPublic lang={user.lang} />
            <Content defaultUser={user} />
        </main>
    )
}
