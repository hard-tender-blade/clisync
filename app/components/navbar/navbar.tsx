import getCurrentUser from '@/modules/client/query/user/getCurrentUser'
import Content from './content'
import authMiddleware from '@/modules/shared/middleware/authMiddleware'
import { Language } from '@/modules/client/languageInterface/language'

export default async function NavbarPublic(
    { lang }: { lang: Language },
    request: Request,
) {
    const { token } = authMiddleware(request)
    const user = token ? await getCurrentUser(token) : null

    return (
        <div>
            <Content lang={lang} user={user} />
        </div>
    )
}
