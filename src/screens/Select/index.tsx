import { ArowBack } from '@rsuite/icons'

import FlowList                   from './lib/FlowList'
import { ISelectFlowScreenProps } from './lib/types'

export default function SelectFlowScreen ({ onSelect }: ISelectFlowScreenProps ) {
    return (
        <>
            <p>Выбери вопрос</p>
            <ArowBack style={{ transform: 'rotate(-90deg)' }} />
            <br />
            <FlowList onSelect={onSelect} />
        </>
    )
}
