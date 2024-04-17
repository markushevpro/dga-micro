import { ArowBack }   from '@rsuite/icons'
import { IconButton } from 'rsuite'

interface IArrowNextProps {
    disabled?: boolean
    onClick?:  () => void
}

export default
function ArrowNext
({ disabled, onClick }: IArrowNextProps )
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
