import { CustomProvider } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'

import '@/shared/styles/global.css'

import type { AppProps }  from 'next/app'
import type { ReactNode } from 'react'

export default function App
({ Component, pageProps }: AppProps ): ReactNode
{
    return (
        <CustomProvider theme="dark">
            <Component {...pageProps} />
        </CustomProvider>
    )
}
