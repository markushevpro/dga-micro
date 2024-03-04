import { Html, Head, Main, NextScript } from 'next/document'

import type { ReactNode } from 'react'

export default function Document
(): ReactNode
{
    return (
        <Html className="rs-theme-dark" lang="en">
            <Head>
                <link href="/fonts/fonts.css" rel="stylesheet" type="text/css" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
