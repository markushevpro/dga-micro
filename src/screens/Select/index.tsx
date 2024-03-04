import { ArowBack } from '@rsuite/icons'

import FlowList from './lib/FlowList'

import type { ISelectFlowScreenProps } from './lib/types'
import type { ReactNode }              from 'react'

export default function SelectFlowScreen
({ onSelect }: ISelectFlowScreenProps ): ReactNode
{
    return (
        <>
            <p>Выбери вопрос</p>
            <ArowBack style={{ transform: 'rotate(-90deg)' }} />
            <br />
            <FlowList onSelect={onSelect} />
        </>
    )
}
