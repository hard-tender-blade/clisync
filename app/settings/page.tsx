'use client'

import React from 'react'
import Content from './content'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/modules/client/queryClient'
import { GoogleOAuthProvider } from '@react-oauth/google'
import publicConfig from '@/modules/shared/config/publicConfig'

export default function page() {
    return (
        <main>
            <QueryClientProvider client={queryClient}>
                <GoogleOAuthProvider clientId={publicConfig.next_public_google_client_id}>
                    <Content />
                </GoogleOAuthProvider>
            </QueryClientProvider>
        </main>
    )
}
