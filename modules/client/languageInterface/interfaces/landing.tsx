import { CiCircleCheck } from 'react-icons/ci'

interface Landing {
    hero: {
        title: string
        subTitle: string
        heroButton: string
    }
    weOffer: {
        title: string
        cards: { number: string; title: string; text: string[] }[]
        features: Feature[]
    }
    video: {
        link: string
        title: string
        text: string
    }
    reviews: {
        title: string
        reviews: Review[]
    }
    pricing: PricingCard[]
}

interface Review {
    profilePicUrl: string
    name: string
    profesion: string
    text: string
    title: string
    stars: number
}
interface PricingCard {
    plan: string
    aboutPlan: string
    title: string
    features: string[]
    button: string
}

interface Feature {
    title: string
    text: string
    icon: React.ReactNode
}
const navbar: {
    en: Landing
    cs: Landing
} = {
    en: {
        hero: {
            title: 'Welcome to Our Service',
            subTitle: 'Experience the best service with us',
            heroButton: 'Get Started',
        },
        weOffer: {
            title: 'What We Offer',
            cards: [
                {
                    number: '01',
                    title: 'High Quality',
                    text: ['We provide top-notch quality in every service we offer.'],
                },
                {
                    number: '01',
                    title: 'High Quality',
                    text: ['We provide top-notch quality in every service we offer.'],
                },

                {
                    number: '01',
                    title: 'High Quality',
                    text: ['We provide top-notch quality in every service we offer.'],
                },
            ],
            features: [
                {
                    title: 'Premium Support',
                    text: 'Our team is available 24/7 to assist you with any queries.',
                    icon: <CiCircleCheck size={40} />,
                },
                {
                    title: 'Premium Support',
                    text: 'Our team is available 24/7 to assist you with any queries.',
                    icon: <CiCircleCheck size={40} />,
                },
            ],
        },
        video: {
            link: 'https://www.youtube.com/embed/KqyGXt1CWBg?si=RMfJvwhPIgiCaJ8e&amp;controls=0',
            title: 'Watch Our Introduction Video',
            text: 'Learn more about our services through this video.',
        },
        reviews: {
            title: 'Reviews',
            reviews: [
                {
                    profilePicUrl:
                        'https://api.api-ninjas.com/v1/randomimage?category=nature',
                    name: 'John Doe',
                    profesion: 'Software Engineer',
                    text: 'Amazing service, highly recommend!',
                    title: 'Great Experience',
                    stars: 5,
                },
                {
                    profilePicUrl:
                        'https://api.api-ninjas.com/v1/randomimage?category=nature',

                    name: 'Jane Smith',
                    profesion: 'Graphic Designer',
                    text: "The best service I've ever used!",
                    title: 'Top Notch',
                    stars: 4,
                },
                {
                    profilePicUrl:
                        'https://api.api-ninjas.com/v1/randomimage?category=nature',

                    name: 'Jane Smith',
                    profesion: 'Graphic Designer',
                    text: "The best service I've ever used!",
                    title: 'Top Notch',
                    stars: 4,
                },
            ],
        },
        pricing: [
            {
                plan: 'Basic Plan',
                aboutPlan: 'Perfect for individuals',
                title: 'Basic',
                features: ['1 GB Storage', 'Basic Support', 'Access to all features'],
                button: 'Choose Basic',
            },
            {
                plan: 'Premium Plan',
                aboutPlan: 'Best for small teams',
                title: 'Premium',
                features: ['10 GB Storage', 'Priority Support', 'Custom Features'],
                button: 'Choose Premium',
            },
            {
                plan: 'Enterprise Plan',
                aboutPlan: 'Ideal for large organizations',
                title: 'Enterprise',
                features: [
                    'Unlimited Storage',
                    '24/7 Support',
                    'Dedicated Account Manager',
                ],
                button: 'Choose Enterprise',
            },
        ],
    },
    cs: {
        hero: {
            title: 'CliSync - vice čas na terapii!',
            subTitle:
                'Zdigitalizujte svou katotéku, zelpšete svou efektivitu, propojte CliSync se svým google kalendářem a máte vše co potřebujete na jednom místě. Clisync je software navržený psycology pro psychology. ',
            heroButton: 'Začít',
        },
        weOffer: {
            title: 'Co nabízíme',
            cards: [
                {
                    number: '01',
                    title: 'Vše na jednom místě',
                    text: [
                        'Kalendář, s možností synchronizací s google kalendáířem.',
                        'Všechny klienty na jednom místě se všemy důležitými informacemi na jedno kliknutí.',
                        'Zprávy, soubory, anamnáza, poznámky nebo připomínka o zaplacení konzuiltace přehledně na jednom místě ',
                        'CliSync textový editor na zápisy z terapií propojený s kalendářem a soubory pro přehlený zápisů a rychlou přípravu.',
                    ],
                },
                {
                    number: '02',
                    title: 'Výborná pracovní efektivita',
                    text: [
                        'Naše aplikace ne navržená psychology pro co nejlepsí pracovní efektivitu',
                        'Aplikace je navržena podle toho jak si myslíme že vypadá pracovní proces psychologa',

                        'Každý psycholog má jiné zvyky proto s aplikaci můžete přizpůsobit podle vašich představ.',
                    ],
                },
                {
                    number: '03',
                    title: 'Bezpečnost',
                    text: [
                        'Bezpečnost je pro nás na prvním místě.',
                        'Plně zašifrovány veškeré informace o vás i vašich klientech.',
                        'Dvoufaktorové ověření, takže ikdyz vám někdo ukradne heslo, vaše data jsou stále v bezpečí.',
                        'Pravidelné zálohy, aby se vaše data nikdy neztratily.',
                    ],
                },
                {
                    number: '04',
                    title: 'Zkušební verze zdarma',
                    text: [
                        'Vyzkoušejte naši aplikaci před tím než si ji zakoupíte.',
                        'Naše zkušební verze není omezená funkcemi aby jste se mohli jednoduše rozhodnout.',

                        'Vyzkoušejte kolik času vám CliSync ušetří v bezplatné verzi pro 20 klientů.',
                    ],
                },
            ],
            features: [
                {
                    title: 'CLiSync textový editor',
                    text: 'Náš tým je k dispozici 24/7, aby vám pomohl s jakýmikoli dotazy. Our team is available 24/7 to assist you with any queries. Our team is available 24/7 to assist you with any queries.',
                    icon: <CiCircleCheck size={45} />,
                },
                {
                    title: 'Kalendář přizpůsobený pro psychology',
                    text: 'Náš tým je k dispozici 24/7, aby vám pomohl s jakýmikoli dotazy. Our team is available 24/7 to assist you with any queries. Our team is available 24/7 to assist you with any queries.',
                    icon: <CiCircleCheck size={45} />,
                },
            ],
        },
        video: {
            link: 'https://www.youtube.com/embed/e5TWhnK0iag?si=3tTOhDEwyzQZA51T&amp;controls=0',
            title: 'Podívejte se na naše úvodní video',
            text: 'Zjistěte více o našich službách prostřednictvím tohoto videa.',
        },
        reviews: {
            title: 'Recenze',
            reviews: [
                {
                    profilePicUrl:
                        'https://api.api-ninjas.com/v1/randomimage?category=nature',

                    name: 'Jan Novák',
                    profesion: 'Softwarový inženýr',
                    text: 'Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji!',
                    title: ' Skvělá zkušenost Skvělá zkušenost',
                    stars: 5,
                },
                {
                    profilePicUrl:
                        'https://api.api-ninjas.com/v1/randomimage?category=nature',

                    name: 'Jana Svoobodová',
                    profesion: 'Grafická designérka',
                    text: 'Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji!',
                    title: 'Špičková kvalita',
                    stars: 4,
                },
                {
                    profilePicUrl:
                        'https://api.api-ninjas.com/v1/randomimage?category=nature',

                    name: 'Jana Svobodová',
                    profesion: 'Grafická designérka',
                    text: 'Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji Úžasná služba, velmi doporučuji!',
                    title: 'Špičková kvalita',
                    stars: 4,
                },
            ],
        },
        pricing: [
            {
                plan: 'Základní plán',
                aboutPlan: 'Perfektní pro jednotlivce',
                title: 'Základní',
                features: [
                    '1 GB úložištěúložištěúložištěúložiště',
                    '1 GB úložiště',
                    '1 GB úložiště',
                    'Základní podpora',
                    'Přístup ke všem funkcím',
                ],
                button: 'Vybrat základní',
            },
            {
                plan: 'Prémiový plán',
                aboutPlan: 'Nejlepší pro malé týmy',
                title: 'Prémiový',
                features: ['10 GB úložiště', 'Prioritní podpora', 'Vlastní funkce'],
                button: 'Vybrat prémiový',
            },
        ],
    },
}

export default navbar
