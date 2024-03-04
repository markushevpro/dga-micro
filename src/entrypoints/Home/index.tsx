import MainFlow   from '@/flows/Main'
import MainLayout from '@/shared/layouts/MainLayout'

import type { ReactNode } from 'react'

export default function HomePage
(): ReactNode
{
    return (
        <MainLayout>
            <MainFlow />
        </MainLayout>
    )
}
