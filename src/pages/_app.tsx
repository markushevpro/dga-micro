import type { AppProps } from 'next/app'

import { CustomProvider } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'

import '@/app/shared/styles/global.css'

export default
function App
({ Component, pageProps }: AppProps )
{
    return (
        <CustomProvider theme="dark">
            <Component {...pageProps} />
        </CustomProvider>
    )
}
