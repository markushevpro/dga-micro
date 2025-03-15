import { ArowBack } from '@rsuite/icons'

import { FlowList } from '@/segments/composition/FlowList'

export
function SelectFlowScreen
()
{
    return (
        <>
            <p>Выбери вопрос</p>
            <ArowBack style={{ transform: 'rotate(-90deg)' }} />
            <br />
            <FlowList />
        </>
    )
}
