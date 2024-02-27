import { CustomProvider } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'

import '@/shared/styles/global.css'

import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps ) {
    return (
        <CustomProvider theme="dark">
            <Component {...pageProps} />
        </CustomProvider>
    )
}
