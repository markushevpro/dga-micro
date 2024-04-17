import { ArowBack } from '@rsuite/icons'

import FlowList                from '~/segments/appearance/FlowList'
import { useMainStoreActions } from '~/shared/stores/main'

export default
function SelectFlowScreen
()
{
    const { setFlow } = useMainStoreActions()

    return (
        <>
            <p>Выбери вопрос</p>
            <ArowBack style={{ transform: 'rotate(-90deg)' }} />
            <br />
            <FlowList onSelect={setFlow} />
        </>
    )
}
