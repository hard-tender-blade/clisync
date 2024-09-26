import NavbarPublic from '../components/navbar/navbar'
import languageInterface, { Language } from '@/modules/client/languageInterface/language'

export async function generateStaticParams() {
    return languageInterface.supportedLanguages.map((lang) => {
        return { lang: lang }
    })
}

export default function Home({ params }: { params: { lang: Language } }) {
    return (
        <div>
            <NavbarPublic lang={params.lang} />
            <div>
                <h1>Home with lang</h1>
            </div>
        </div>
    )
}
