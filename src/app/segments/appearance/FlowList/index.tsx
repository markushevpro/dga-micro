import type { PropsWithChildren }  from 'react'
import type { TFlowSelectHandler } from '~/services/flow'

import FlowItem        from '~/segments/elements/FlowItem'
import { flowsConfig } from '~/services/flow/lib/flows'
import Stack           from '~/shared/ui-kit/Stack'

interface IFlowListProps
extends PropsWithChildren
{
    onSelect: TFlowSelectHandler
}

export default
function FlowList
({ children, onSelect }: IFlowListProps )
{
    return (
        <Stack vertical spacing={30}>
            {
                flowsConfig.map( flow => (
                    <FlowItem key={flow.name} {...flow} onClick={onSelect( flow.name )} />
                ))
            }

            { children }
        </Stack>
    )
}
