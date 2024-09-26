//todo pls make text and steps names better, mb change 
export interface SignUp {
    shared: {
        continue: string
    }
    root: {
        title: string
        email: string
        password: string
        repeatPassword: string
        alreadyHaveAcc: string
        or: string
        create: string
        errors: {
            invalidEmail: string
            weekPassword: string
            passwordsNotMatch: string
            alreadyRegistered: string
            failedToSignUp: string
        }
    }
    step1: {
        title: string
        language: string
        fullName: Field
        phoneNumber: FieldWithToolTip
        errors: {
            invalidFullName: string
            invalidPhoneNumber: string
        }
    }
    step2: {
        title: string
        jobTitle: Field
        experienceYears: string
        clinicPsychologist: string
        errors: {
            invalidJobTitle: string
            invalidExperienceYears: string
        }
    }
    step3: {
        title: string
        onlineServices: string
        inPersonServices: string
        errors: {
            youShouldChooseAtLeastOne: string
        }
    }
    step4: {
        title: string
        country: string
        countries: string[]
        city: Field
        address: Field
        postalCode: Field
        errors: {
            invalidCountry: string
            invalidCity: string
            invalidAddress: string
            invalidPostalCode: string
        }
    }
    step5: {
        title: string
        aboutMe: FieldWithToolTip
        status: FieldWithToolTip
        statuses: {
            lookingForNewCustomers: string
            openForOffers: string
            notAvailable: string
        }
        website: Field
        finishRegistration: string
        errors: {
            invalidAboutMe: string
            invalidStatus: string
        }
    }
}

interface Field {
    label: string
    placeholder: string
}

interface FieldWithToolTip extends Field {
    toolTip: string
}

const signUp: {
    en: SignUp
    cs: SignUp
} = {
    en: {
        shared: {
            continue: 'Continue',
        },
        root: {
            title: 'Sign up',
            email: 'Email',
            password: 'Password',
            repeatPassword: 'Confirm password',
            create: 'Create',
            alreadyHaveAcc: 'Already have an account',
            or: 'or',
            errors: {
                failedToSignUp: 'Failed to register, this email may already be registered',
                invalidEmail: 'Invalid email',
                weekPassword:
                    'Password should contain at least 8 characters, 1 lowercase, 1 uppercase, 1 number and 1 symbol',
                passwordsNotMatch: 'Passwords do not match',
                alreadyRegistered: 'This email is already registered',
            },
        },
        step1: {
            title: 'Personal Information',
            language: 'Language',
            fullName: {
                label: 'Full name *',
                placeholder: 'John Doe',
            },
            phoneNumber: {
                label: 'Phone number *',
                placeholder: '+420 123 456 789',
                toolTip: 'Start with + and country code',
            },
            errors: {
                invalidFullName: 'Invalid full name',
                invalidPhoneNumber: 'Invalid phone number',
            },
        },
        step2: {
            title: 'About your work',
            jobTitle: {
                label: 'Job title *',
                placeholder: 'Psychologist',
            },
            experienceYears: 'How many years are you in the field *',
            clinicPsychologist: 'I am a clinical psychologist *',
            errors: {
                invalidJobTitle: 'Invalid job title',
                invalidExperienceYears: 'Invalid experience years',
            }
        },
        step3: {
            title: 'Services',
            onlineServices: 'Online services',
            inPersonServices: 'In person services',
            errors: {
                youShouldChooseAtLeastOne: 'You should choose at least one',
            }
        },
        step4: {
            title: 'Work Address',
            country: "Country *",
            countries: [
                "Afghanistan",
                "Albania",
                "Algeria",
                "Andorra",
                "Angola",
                "Antigua and Barbuda",
                "Argentina",
                "Armenia",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas",
                "Bahrain",
                "Bangladesh",
                "Barbados",
                "Belarus",
                "Belgium",
                "Belize",
                "Benin",
                "Bhutan",
                "Bolivia",
                "Bosnia and Herzegovina",
                "Botswana",
                "Brazil",
                "Brunei",
                "Bulgaria",
                "Burkina Faso",
                "Burundi",
                "Cabo Verde",
                "Cambodia",
                "Cameroon",
                "Canada",
                "Central African Republic",
                "Chad",
                "Chile",
                "China",
                "Colombia",
                "Comoros",
                "Congo, Democratic Republic of the",
                "Congo, Republic of the",
                "Costa Rica",
                "Croatia",
                "Cuba",
                "Cyprus",
                "Czech Republic",
                "Denmark",
                "Djibouti",
                "Dominica",
                "Dominican Republic",
                "East Timor (Timor-Leste)",
                "Ecuador",
                "Egypt",
                "El Salvador",
                "Equatorial Guinea",
                "Eritrea",
                "Estonia",
                "Eswatini",
                "Ethiopia",
                "Fiji",
                "Finland",
                "France",
                "Gabon",
                "Gambia",
                "Georgia",
                "Germany",
                "Ghana",
                "Greece",
                "Grenada",
                "Guatemala",
                "Guinea",
                "Guinea-Bissau",
                "Guyana",
                "Haiti",
                "Honduras",
                "Hungary",
                "Iceland",
                "India",
                "Indonesia",
                "Iran",
                "Iraq",
                "Ireland",
                "Israel",
                "Italy",
                "Jamaica",
                "Japan",
                "Jordan",
                "Kazakhstan",
                "Kenya",
                "Kiribati",
                "Korea, North",
                "Korea, South",
                "Kosovo",
                "Kuwait",
                "Kyrgyzstan",
                "Laos",
                "Latvia",
                "Lebanon",
                "Lesotho",
                "Liberia",
                "Libya",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Madagascar",
                "Malawi",
                "Malaysia",
                "Maldives",
                "Mali",
                "Malta",
                "Marshall Islands",
                "Mauritania",
                "Mauritius",
                "Mexico",
                "Micronesia",
                "Moldova",
                "Monaco",
                "Mongolia",
                "Montenegro",
                "Morocco",
                "Mozambique",
                "Myanmar (Burma)",
                "Namibia",
                "Nauru",
                "Nepal",
                "Netherlands",
                "New Zealand",
                "Nicaragua",
                "Niger",
                "Nigeria",
                "North Macedonia",
                "Norway",
                "Oman",
                "Pakistan",
                "Palau",
                "Panama",
                "Papua New Guinea",
                "Paraguay",
                "Peru",
                "Philippines",
                "Poland",
                "Portugal",
                "Qatar",
                "Romania",
                "Russia",
                "Rwanda",
                "Saint Kitts and Nevis",
                "Saint Lucia",
                "Saint Vincent and the Grenadines",
                "Samoa",
                "San Marino",
                "Sao Tome and Principe",
                "Saudi Arabia",
                "Senegal",
                "Serbia",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Slovakia",
                "Slovenia",
                "Solomon Islands",
                "Somalia",
                "South Africa",
                "South Sudan",
                "Spain",
                "Sri Lanka",
                "Sudan",
                "Suriname",
                "Sweden",
                "Switzerland",
                "Syria",
                "Taiwan",
                "Tajikistan",
                "Tanzania",
                "Thailand",
                "Togo",
                "Tonga",
                "Trinidad and Tobago",
                "Tunisia",
                "Turkey",
                "Turkmenistan",
                "Tuvalu",
                "Uganda",
                "Ukraine",
                "United Arab Emirates",
                "United Kingdom",
                "United States",
                "Uruguay",
                "Uzbekistan",
                "Vanuatu",
                "Vatican City (Holy See)",
                "Venezuela",
                "Vietnam",
                "Yemen",
                "Zambia",
                "Zimbabwe"
            ],
            city: {
                label: 'City *',
                placeholder: 'Prague',
            },
            address: {
                label: 'Address *',
                placeholder: 'Wenceslas Square 1',
            },
            postalCode: {
                label: 'Postal code *',
                placeholder: '110 00',
            },
            errors: {
                invalidCountry: 'Invalid country',
                invalidCity: 'Invalid city',
                invalidAddress: 'Invalid address',
                invalidPostalCode: 'Invalid postal code',
            }
        }
        ,
        step5: {
            title: 'About you',
            aboutMe: {
                label: 'About me *',
                placeholder: 'I am a psychologist with 10 years of experience',
                toolTip: 'It will be shown in your public profile if you choose to be listed, you can change it later',
            },
            status: {
                label: 'Status *',
                placeholder: '-',
                toolTip: 'This determines whether and how your profile will be displayed in the list of psychologists, you can change it later',
            },
            statuses: {
                lookingForNewCustomers: 'Looking for new customers',
                openForOffers: 'Open for offers',
                notAvailable: 'Not available',
            },
            website: {
                label: 'Website',
                placeholder: 'https://example.com',
            },
            errors: {
                invalidAboutMe: 'Invalid about me',
                invalidStatus: 'Invalid status',
            },
            finishRegistration: 'Finish registration',
        }
    },
    cs: {
        shared: {
            continue: 'Pokračovat',
        },
        root: {
            title: 'Registrace',
            email: 'Email',
            password: 'Heslo',
            repeatPassword: 'Potvrďte heslo',
            create: 'Vytvořit',
            alreadyHaveAcc: 'Už mám účet',
            or: 'nebo',
            errors: {
                failedToSignUp: 'Registrace se nezdařila, tento email je možná již registrován',
                invalidEmail: 'Neplatný email',
                weekPassword:
                    'Heslo by mělo obsahovat alespoň 8 znaků, 1 malé písmeno, 1 velké písmeno, 1 číslo a 1 symbol',
                passwordsNotMatch: 'Hesla se neshodují',
                alreadyRegistered: 'Tento email je již registrován',
            },
        },
        step1: {
            title: 'Osobní údaje',
            language: 'Jazyk',
            fullName: {
                label: 'Celé jméno *',
                placeholder: 'Jan Novák',
            },
            phoneNumber: {
                label: 'Telefonní číslo *',
                placeholder: '+420123456789',
                toolTip: 'Začněte s + a kódem země',
            },
            errors: {
                invalidFullName: 'Neplatné jméno',
                invalidPhoneNumber: 'Neplatné telefonní číslo',
            },
        },
        step2: {
            title: 'O vaší práci',
            jobTitle: {
                label: 'Pozice',
                placeholder: 'Psycholog',
            },
            experienceYears: 'Kolik let jste v oboru',
            clinicPsychologist: 'Jsem klinický psycholog',
            errors: {
                invalidJobTitle: 'Neplatná pozice',
                invalidExperienceYears: 'Neplatný počet let v oboru',
            },
        },
        step3: {
            title: 'Služby',
            onlineServices: 'Online služby',
            inPersonServices: 'Služby v osobě',
            errors: {
                youShouldChooseAtLeastOne: 'Musíte vybrat alespoň jednu',
            },
        },
        step4: {
            title: 'Pracovní adresa',
            country: 'Země *',
            countries: [
                "Afghánistán",
                "Albánie",
                "Alžírsko",
                "Andorra",
                "Angola",
                "Antigua a Barbuda",
                "Argentina",
                "Arménie",
                "Austrálie",
                "Rakousko",
                "Ázerbajdžán",
                "Bahamy",
                "Bahrajn",
                "Bangladéš",
                "Barbados",
                "Bělorusko",
                "Belgie",
                "Belize",
                "Benin",
                "Bhútán",
                "Bolívie",
                "Bosna a Hercegovina",
                "Botswana",
                "Brazílie",
                "Brunej",
                "Bulharsko",
                "Burkina Faso",
                "Burundi",
                "Kaboverdy",
                "Kambodža",
                "Kamerun",
                "Kanada",
                "Středoafrická republika",
                "Čad",
                "Chile",
                "Čína",
                "Kolumbie",
                "komory",
                "Kongo, Demokratická republika",
                "Kongo, Republika",
                "Kostarika",
                "Chorvatsko",
                "Kuba",
                "Kypr",
                "Česká republika",
                "Dánsko",
                "Džibutsko",
                "Dominika",
                "Dominikánská republika",
                "Východní Timor (Timor-Leste)",
                "Ekvádor",
                "Egypt",
                "El Salvador",
                "Rovníková Guinea",
                "Eritrea",
                "Estonsko",
                "Eswatini",
                "Etiopie",
                "Fidži",
                "Finsko",
                "Francie",
                "Gabon",
                "Gambie",
                "Gruzie",
                "Německo",
                "Ghana",
                "Řecko",
                "Grenada",
                "Guatemala",
                "Guinea",
                "Guinea-Bissau",
                "Guyana",
                "Haiti",
                "Honduras",
                "Maďarsko",
                "Island",
                "Indie",
                "Indonésie",
                "Írán",
                "Irák",
                "Irsko",
                "Izrael",
                "Itálie",
                "Jamaica",
                "Japonsko",
                "Jordán",
                "Kazachstán",
                "Keňa",
                "Kiribati",
                "Korea, sever",
                "Jižní Korea",
                "Kosovo",
                "Kuvajt",
                "Kyrgyzstán",
                "Laos",
                "Lotyšsko",
                "Libanon",
                "Lesotho",
                "Libérie",
                "Libye",
                "Lichtenštejnsko",
                "Litva",
                "Lucembursko",
                "Madagaskar",
                "Malawi",
                "Malajsie",
                "Maledivy",
                "Mali",
                "Malta",
                "Marshallovy ostrovy",
                "Mauritánie",
                "Mauricius",
                "Mexiko",
                "Mikronésie",
                "Moldavsko",
                "Monaco",
                "Mongolsko",
                "Černá Hora",
                "Maroko",
                "Mozambik",
                "Myanmar (Barma)",
                "Namibie",
                "Nauru",
                "Nepál",
                "Holandsko",
                "Nový Zéland",
                "Nikaragua",
                "Niger",
                "Nigérie",
                "Severní Makedonie",
                "Norsko",
                "Omán",
                "Pákistán",
                "Palau",
                "Panama",
                "Papua-Nová Guinea",
                "Paraguay",
                "Peru",
                "Filipíny",
                "Polsko",
                "Portugalsko",
                "Katar",
                "Rumunsko",
                "Rusko",
                "Rwanda",
                "Svatý Kryštof a Nevis",
                "Svatá Lucie",
                "Svatý Vincent a Grenadiny",
                "Samoa",
                "San Marino",
                "Sao Tome and Principe",
                "Saudská arábie",
                "Senegal",
                "Srbsko",
                "Seychely",
                "Sierra Leone",
                "Singapur",
                "Slovensko",
                "Slovinsko",
                "Solomonovy ostrovy",
                "Somálsko",
                "Jižní Afrika",
                "Jižní Súdán",
                "Španělsko",
                "Srí Lanka",
                "Súdán",
                "Suriname",
                "Švédsko",
                "Švýcarsko",
                "Sýrie",
                "Tchaj-wan",
                "Tádžikistán",
                "Tanzanie",
                "Thajsko",
                "Jít",
                "Tonga",
                "Trinidad a Tobago",
                "Tunisko",
                "Krocan",
                "Turkmenistán",
                "Tuvalu",
                "Uganda",
                "Ukrajina",
                "Spojené arabské emiráty",
                "Spojené království",
                "Spojené státy",
                "Uruguay",
                "Uzbekistán",
                "Vanuatu",
                "Vatikán (Svatý stolec)",
                "Venezuela",
                "Vietnam",
                "Jemen",
                "Zambie",
                "Zimbabwe"
            ],
            city: {
                label: 'Město *',
                placeholder: 'Praha',
            },
            address: {
                label: 'Adresa *',
                placeholder: 'Václavské náměstí 1',
            },
            postalCode: {
                label: 'PSČ *',
                placeholder: '110 00',
            },
            errors: {
                invalidCountry: 'Neplatná země',
                invalidCity: 'Neplatné město',
                invalidAddress: 'Neplatná adresa',
                invalidPostalCode: 'Neplatné PSČ',
            },
        },
        step5: {
            title: 'O vás',
            aboutMe: {
                label: 'O mně *',
                placeholder: 'Jsem psychologist s 10 lety zkušeností',
                toolTip: 'Bude zobrazeno ve vašem veřejném profilu, pokud se rozhodnete být uvedeni, později jej můžete změnit',
            },
            status: {
                label: 'Status *',
                placeholder: '-',
                toolTip: 'Tím se určuje, zda a jak bude váš profil zobrazen v seznamu psychologů, později jej můžete změnit',
            },
            statuses: {
                lookingForNewCustomers: 'Hledám nové zákazníky',
                openForOffers: 'Otevřen pro nabídky',
                notAvailable: 'Není k dispozici',
            },
            website: {
                label: 'Webová stránka',
                placeholder: 'https://example.com',
            },
            errors: {
                invalidAboutMe: 'Neplatné o mně',
                invalidStatus: 'Neplatný status',
            },
            finishRegistration: 'Dokončit registraci',
        }
    },
}

export default signUp