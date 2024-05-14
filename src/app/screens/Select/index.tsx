import { ArowBack } from '@rsuite/icons'

import FlowList from '~/segments/appearance/FlowList'

export default
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
