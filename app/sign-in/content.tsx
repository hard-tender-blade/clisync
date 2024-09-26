'use client'
import singInWithEmail from '@/modules/client/query/auth/singInWithEmail'
import languageInterface, { Language } from '@/modules/client/languageInterface/language'
import { showAlert } from '@/modules/client/utils/alert/alerts'
import { validateEmail, validatePassword } from '@/modules/shared/validation/validation'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'
import { FaShieldHeart } from 'react-icons/fa6'
import { GoogleOAuthProvider } from '@react-oauth/google'
import publicConfig from '@/modules/shared/config/publicConfig'
import GoogleButton from './components/googleButton'
import singInWithGoogle from '@/modules/client/query/auth/singInWithGoogle'
import { hideLoading, showLoading } from '@/modules/client/utils/loading/loadingModule'
import PC from '../components/pc'
import PX from '../components/px'
import Separator from '../components/separator'
import { IoMdFlower } from 'react-icons/io'

const Element = ({ lang }: { lang: Language }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const searchParams = useSearchParams()

    const LI = languageInterface.interfaces.signIn[lang]

    const handleSubmit = async () => {
        if (!validateEmail(email)) {
            showAlert('error', 'short', LI.errors.invalidEmail)
            return
        }
        if (!validatePassword(password)) {
            showAlert('error', 'short', LI.errors.weekPassword)
            return
        }

        showLoading()
        const ok = await singInWithEmail({ email, password })
        if (!ok) {
            showAlert('error', 'short', 'Invalid credentials')
            setEmail('')
            setPassword('')
            hideLoading()
            return
        }

        const redirect = searchParams.get('redirect')
        if (redirect) {
            router.replace(redirect)
            hideLoading()
            return
        }
        window.location.href = '/'
        hideLoading()
        return
    }

    const handleLanguageChange = (event: any) => {
        router.push(`/${event.target.value}/sign-in?${searchParams.toString()}`)
    }

    const handleSignInWithGoogle = async (accessToken: string) => {
        showLoading()
        const ok = await singInWithGoogle({ accessToken })
        if (!ok) {
            showAlert('error', 'short', LI.errors.failedToSignIn)
            hideLoading()
            return
        }

        const redirect = searchParams.get('redirect')
        if (redirect) {
            router.replace(redirect)
            hideLoading()
            return
        }
        window.location.href = '/'
        hideLoading()
        return
    }

    return (
        <div className="flex h-screen w-screen">
            <PC className="h-full w-7/12 bg-primary" />

            <div className="w-full md:w-5/12">
                <PX className="flex flex-col">
                    {searchParams.get('sessionExpired') ? (
                        <div>
                            <Separator size="md" />
                            <a className="btn btn-ghost ml-1 flex justify-center rounded-full text-xl">
                                <IoMdFlower />
                                CliSync
                            </a>
                            <div role="alert" className="alert flex text-left">
                                <FaShieldHeart className="h-10 w-10" />
                                <span className="text-xs">{LI.sessionExpired}</span>
                            </div>
                            <Separator size="sm" />
                        </div>
                    ) : (
                        <>
                            <Separator size="sm" />
                            <a className="btn btn-ghost ml-1 flex justify-center rounded-full text-xl">
                                <IoMdFlower />
                                CliSync
                            </a>
                            <Separator size="sm" />
                        </>
                    )}
                    <div className="flex items-center justify-between">
                        <h3 className="whitespace-nowrap text-3xl font-bold">
                            {LI.title}
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
                            <span className="label-text">{LI.email}</span>
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
                            <span className="label-text">{LI.password}</span>
                        </div>
                        <input
                            type="password"
                            placeholder={LI.password}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered w-full"
                            id="password-input"
                            autoComplete="current-password"
                        />
                    </label>
                    <button className="btn btn-primary mt-8" onClick={handleSubmit}>
                        {LI.submit}
                    </button>

                    <GoogleOAuthProvider
                        clientId={publicConfig.next_public_google_client_id}
                    >
                        <GoogleButton
                            title={'Sing in with Google'}
                            callBack={handleSignInWithGoogle}
                        />
                    </GoogleOAuthProvider>

                    <div className="divider text-sm uppercase">{LI.or}</div>

                    <Link href="/sign-up" className="btn">
                        {LI.createNewAcc}
                    </Link>
                </PX>
            </div>
        </div>
    )
}

export default function Content({ lang }: { lang: Language }) {
    return (
        <Suspense fallback={<></>}>
            <Element lang={lang} />
        </Suspense>
    )
}
