import { flowsConfig } from '@/services/flow/lib/flows'
import Stack           from '@/shared/layouts/Stack'

import FlowItem           from '../FlowItem'
import { IFlowListProps } from '../types'

export default function FlowList ({ children, onSelect }: IFlowListProps ) {
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
