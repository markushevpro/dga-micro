import { MainLayout } from '@/segments/composition/MainLayout'

import { useMainFlow } from './hook'

export
function MainFlow
()
{
    const { content } = useMainFlow()

    return (
        <MainLayout>
            { content }
        </MainLayout>
    )
}
