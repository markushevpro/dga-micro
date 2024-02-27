import { Button } from 'rsuite'

import Stack from '@/shared/layouts/Stack'

import { IFlowItemProps } from '../types'

export default function FlowItem ({ title, description, apperance, onSelect }: IFlowItemProps ) {
    return (
        <Stack vertical spacing={10}>
            <Button appearance={apperance} onClick={onSelect}>{ title }</Button>
            <p style={{ fontSize: '.6em' }}>{ description }</p>
        </Stack>
    )
}
