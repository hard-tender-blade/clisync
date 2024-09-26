import React from 'react'
import languageInterface, { Language } from '@/modules/client/languageInterface/language'
import Content from '@/app/sign-up/content'

export async function generateStaticParams() {
    return languageInterface.supportedLanguages.map((lang) => {
        return { lang: lang }
    })
}

export default function Page({ params }: { params: { lang: Language } }) {
    return <Content lang={params.lang} />
}
