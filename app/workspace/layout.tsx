import { cookies } from 'next/headers'

export default function WorkspaceThemeLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    let theme = cookies().get('theme')?.value
    if (theme !== 'light' && theme !== 'dark') theme = 'light'

    return (
        <div id="theme" data-theme={theme}>
            {children}
        </div>
    )
}
