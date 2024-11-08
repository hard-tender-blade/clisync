interface SignIn {
    title: string
    email: string
    password: string
    submit: string
    createNewAcc: string
    or: string
    sessionExpired: string
    errors: {
        failedToSignIn: string
        invalidEmail: string
        weekPassword: string
    }
}

const signIn: {
    en: SignIn
    cs: SignIn
} = {
    en: {
        title: 'Sign in',
        email: 'Email',
        password: 'Password',
        submit: 'Submit',
        createNewAcc: 'Create new account',
        or: 'or',
        sessionExpired:
            'Your session expired due to security measures. Thank you for your understanding!',
        errors: {
            failedToSignIn: 'Invalid credentials',
            invalidEmail: 'Invalid email',
            weekPassword:
                'Password should contain at least 8 characters, 1 lowercase, 1 uppercase, 1 number and 1 symbol',
        },
    },
    cs: {
        title: 'Přihlášení',
        email: 'Email',
        password: 'Heslo',
        submit: 'Přihlásit se',
        createNewAcc: 'Vytvořit nový účet',
        or: 'nebo',
        sessionExpired:
            'Vaše relace vypršela kvůli bezpečnostním opatřením. Děkujeme za pochopení!',
        errors: {
            failedToSignIn: 'Neplatné přihlašovací údaje',
            invalidEmail: 'Neplatný email',
            weekPassword:
                'Heslo by mělo obsahovat alespoň 8 znaků, 1 malé písmeno, 1 velké písmeno, 1 číslo a 1 symbol',
        },
    },
}

export default signIn
