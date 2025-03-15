import { ArowBack }   from '@rsuite/icons'
import { IconButton } from 'rsuite'

interface PArrowNext
{
    disabled?: boolean
    onClick?: () => void
}

export
function ArrowNext
({ disabled, onClick }: PArrowNext )
{
    return (
        <IconButton
            appearance='subtle'
            disabled={disabled}
            icon={<ArowBack />}
            style={{ transform: 'rotate(180deg)' }}
            onClick={onClick}
        />
    )
}
