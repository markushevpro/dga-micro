import { Html, Head, Main, NextScript } from 'next/document'
import { Suspense }                     from 'react'

export default function Document () {
    return (
        <Html lang="en" style={{ backgroundColor: '#0f131a' }}>
            <Head>
                <link href="/fonts/fonts.css" rel="stylesheet" type="text/css" />
            </Head>

            <body style={{ backgroundColor: '#0f131a' }}>
                <Suspense fallback={<p>Loading...</p>}>
                    <Main />
                </Suspense>

                <NextScript />
            </body>
        </Html>
    )
}
