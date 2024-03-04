import { Button } from 'rsuite'

import Stack from '@/shared/layouts/Stack'

import type { IFlowItemProps } from '@/screens/Select/lib/types'
import type { ReactNode }      from 'react'

export default function FlowItem
({ title, description, apperance, onSelect }: IFlowItemProps ): ReactNode
{
    return (
        <Stack vertical spacing={10}>
            <Button appearance={apperance} onClick={onSelect}>{ title }</Button>
            <p style={{ fontSize: '.6em' }}>{ description }</p>
        </Stack>
    )
}
