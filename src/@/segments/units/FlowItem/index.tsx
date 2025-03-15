import { Button } from 'rsuite'

import { Stack } from '@/shared/ui-kit/Stack'

import type { TFlowInfo } from '@/services/flow'

interface PFlowItem
    extends
    TFlowInfo
{
    onClick: () => void
}

export
function FlowItem
({ title, description, apperance, onClick }: PFlowItem )
{
    return (
        <Stack vertical spacing={10}>
            <Button appearance={apperance} onClick={onClick}>{ title }</Button>
            <p style={{ fontSize: '.6em' }}>{ description }</p>
        </Stack>
    )
}
