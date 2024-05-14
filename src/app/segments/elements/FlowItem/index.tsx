import type { TFlowInfo } from '~/services/flow'

import { Button } from 'rsuite'

import Stack from '~/shared/ui-kit/Stack'

interface IFlowItemProps
extends TFlowInfo
{
    onClick: () => void
}

export default
function FlowItem
({ title, description, apperance, onClick }: IFlowItemProps )
{
    return (
        <Stack vertical spacing={10}>
            <Button appearance={apperance} onClick={onClick}>{ title }</Button>
            <p style={{ fontSize: '.6em' }}>{ description }</p>
        </Stack>
    )
}
