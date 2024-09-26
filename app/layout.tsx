import type { Metadata } from 'next'
// import './default.css'
import './globals.css'
import './typography.css'
import AlertStack from '../modules/client/utils/alert/alertStack'
import Loading from '../modules/client/utils/loading/loading'
import ModalContainer from '../modules/client/utils/modal/modalContainer'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
    title: 'CliSync',
    description: 'Best client management software for psychologists and therapists',
    viewport: 'width=device-width, initial-scale=1 viewport-fit=cover',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html data-theme="light" lang="en">
            <body>
                <ModalContainer />
                <Loading />
                {children}
                <AlertStack />
            </body>
        </html>
    )
}
