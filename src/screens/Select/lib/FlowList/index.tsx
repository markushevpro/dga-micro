import FlowItem        from '@/screens/Select/lib/FlowItem'
import { flowsConfig } from '@/services/flow/lib/flows'
import Stack           from '@/shared/layouts/Stack'

import type { IFlowListProps } from '@/screens/Select/lib/types'
import type { ReactNode }      from 'react'

export default function FlowList
({ children, onSelect }: IFlowListProps ): ReactNode
{
    return (
        <Stack vertical spacing={30}>
            {
                flowsConfig.map( flow => (
                    <FlowItem key={flow.name} {...flow} onSelect={onSelect( flow.name )} />
                ))
            }

            {
                children
            }
        </Stack>
    )
}
