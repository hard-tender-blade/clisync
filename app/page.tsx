import languageInterface from '@/modules/client/languageInterface/language'
import NavbarPublic from './components/navbar/navbar'
import Hero from './components/landing/hero/hero'
import Cards from './components/landing/cards/cards'
import Video from './components/landing/video/video'
import Features from './components/landing/features/features'
import Reviews from './components/landing/reviews/reviews'
import Pricing from './components/landing/pricing/picing'

export default function Home() {
    return (
        <div className="flex w-full flex-col items-center justify-center px-10 md:px-20">
            <NavbarPublic lang={languageInterface.defaultLanguage} />
            <Hero lang={languageInterface.defaultLanguage} />
            <Cards lang={languageInterface.defaultLanguage} />
            <Features lang={languageInterface.defaultLanguage} />
            <Video lang={languageInterface.defaultLanguage} />
            <Reviews lang={languageInterface.defaultLanguage} />
            <Pricing lang={languageInterface.defaultLanguage} />
        </div>
    )
}
