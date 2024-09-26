'use client'
import React, { Suspense, useState } from 'react'
import Link from 'next/link'
import languageInterface, { Language } from '@/modules/client/languageInterface/language'
import { useRouter, useSearchParams } from 'next/navigation'
import { GoogleOAuthProvider } from '@react-oauth/google'
import publicConfig from '@/modules/shared/config/publicConfig'
import GoogleButton from './components/googleButton'
import { showAlert } from '@/modules/client/utils/alert/alerts'
import { validateEmail, validatePassword } from '@/modules/shared/validation/validation'
import signUpWithEmail from '@/modules/client/query/auth/singUpWithEmail'
import getUserDataFromGoogleAuthCodeFlow from '@/modules/client/query/auth/getUserDataFromGoogleSignUpPage'
import signUpWithGoogle from '@/modules/client/query/auth/singUpWithGoogle'
import { hideLoading, showLoading } from '@/modules/client/utils/loading/loadingModule'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import PC from '../components/pc'
import { IoMdFlower } from 'react-icons/io'
import PX from '../components/px'
import Separator from '../components/separator'

const Element = ({ lang }: { lang: Language }) => {
    const [LI, setLI] = useState(languageInterface.interfaces.signUp[lang])

    const router = useRouter()
    const searchParams = useSearchParams()

    const [isEmailSent, setIsEmailSent] = useState(false)
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const handleSignUpWithEmailAndPassword = async () => {
        if (password1 !== password2) {
            showAlert('error', 'short', LI.root.errors.passwordsNotMatch)
            return
        }

        if (!validatePassword(password1)) {
            showAlert('error', 'short', LI.root.errors.weekPassword)
        }

        if (!validateEmail(email)) {
            showAlert('error', 'short', LI.root.errors.invalidEmail)
            return
        }

        showLoading()
        const ok = await signUpWithEmail({
            email,
            password: password1,
            lang,
        })
        if (!ok) {
            showAlert('error', 'short', LI.root.errors.failedToSignUp)
            hideLoading()
            return
        }
        setIsEmailSent(true)
        showAlert('success', 'short', 'Verification email sent, check your inbox!')
        hideLoading()
    }

    const handleSignUpWithGoogle = async (code: string) => {
        showLoading()
        const data = await getUserDataFromGoogleAuthCodeFlow(code)
        if (!data) {
            showAlert(
                'error',
                'short',
                'Failed to authenticate with Google, contact support please',
            )
            hideLoading()
            return
        }

        const ok = await signUpWithGoogle({
            accessToken: data.tokens.access_token,
            refreshToken: data.tokens.refresh_token,
            lang: lang,
            name: data.user.name,
        })
        if (!ok) {
            showAlert('error', 'short', LI.root.errors.failedToSignUp)
            hideLoading()
            return
        }

        window.location.href = '/'
        hideLoading()
    }

    const handleLanguageChange = (event: any) => {
        router.push(`/${event.target.value}/sign-up?${searchParams.toString()}`)
    }

    return (
        <div className="flex h-screen w-screen">
            <PC className="h-full w-7/12 bg-primary" />

            <div className="w-full md:w-5/12">
                <PX>
                    {isEmailSent ? (
                        <>
                            <Separator size="sm" />
                            <a className="btn btn-ghost ml-1 flex justify-center rounded-full text-xl">
                                <IoMdFlower />
                                CliSync
                            </a>
                            <Separator size="sm" />
                            <MdOutlineMarkEmailUnread className="h-16 w-16" />
                            <h3 className="whitespace-nowrap text-3xl font-bold">
                                Check your inbox!
                            </h3>
                            <p className="pb-40">
                                {`If you didn't receive the email, `}
                                <strong className="font-bold">
                                    please check your spam folder.
                                </strong>
                            </p>
                        </>
                    ) : (
                        <div className="flex flex-col">
                            <Separator size="sm" />
                            <a className="btn btn-ghost ml-1 flex justify-center rounded-full text-xl">
                                <IoMdFlower />
                                CliSync
                            </a>
                            <Separator size="sm" />
                            <div className="flex items-center justify-between">
                                <h3 className="whitespace-nowrap text-3xl font-bold">
                                    {LI.root.title}
                                </h3>
                                <select
                                    className="select select-bordered select-xs"
                                    onChange={handleLanguageChange}
                                    value={lang}
                                >
                                    {languageInterface.supportedLanguages.map((sl) => (
                                        <option key={sl}>{sl}</option>
                                    ))}
                                </select>
                            </div>
                            <label className="form-control mt-4 w-full">
                                <div className="label">
                                    <span className="label-text">{LI.root.email}</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input input-bordered w-full"
                                    id="email-input"
                                    autoComplete="email"
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">{LI.root.password}</span>
                                </div>
                                <input
                                    type="password"
                                    placeholder={LI.root.password}
                                    value={password1}
                                    onChange={(e) => setPassword1(e.target.value)}
                                    className="input input-bordered w-full"
                                    id="password-input"
                                    autoComplete="current-password"
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">
                                        {LI.root.repeatPassword}
                                    </span>
                                </div>
                                <input
                                    type="password"
                                    placeholder={LI.root.repeatPassword}
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}
                                    className="input input-bordered w-full"
                                    id="password-input"
                                    autoComplete="current-password"
                                />
                            </label>
                            <button
                                className="btn btn-primary mt-6"
                                onClick={handleSignUpWithEmailAndPassword}
                            >
                                {LI.root.create}
                            </button>

                            <GoogleOAuthProvider
                                clientId={publicConfig.next_public_google_client_id}
                            >
                                <GoogleButton
                                    title={'Sign up with Google'}
                                    callBack={handleSignUpWithGoogle}
                                />
                            </GoogleOAuthProvider>

                            <div className="divider text-sm uppercase">{LI.root.or}</div>

                            <Link href="/sign-in" className="btn">
                                {LI.root.alreadyHaveAcc}
                            </Link>
                        </div>
                    )}
                </PX>
            </div>
        </div>
    )
}

export default function Content({ lang }: { lang: Language }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Element lang={lang} />
        </Suspense>
    )
}
