import Head from 'next/head'

import { MainLayout } from '@/segments/composition/MainLayout'

import { useMainFlow } from './hook'

export
function MainFlow
()
{
    const { content } = useMainFlow()

    return (
        <MainLayout>
            <Head>
                <title>Desire-Goal-Action Micro UI</title>
            </Head>

            { content }
        </MainLayout>
    )
}
