import MainLayout from '~/segments/appearance/MainLayout'

import { useMainFlowContent } from './hooks/useMainFlowContent'

export default
function MainFlow
()
{
    const content = useMainFlowContent()

    return (
        <MainLayout>
            { content }
        </MainLayout>
    )
}
