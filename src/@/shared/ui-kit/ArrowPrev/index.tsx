import { ArowBack }   from '@rsuite/icons'
import { IconButton } from 'rsuite'

interface PArrowPrev
{
    visible?: boolean
    className?: string
    onClick?: () => void
}

export
function ArrowPrev
({ visible, className, onClick }: PArrowPrev )
{
    if ( visible ) {
        return (
            <IconButton appearance='subtle' icon={<ArowBack />} onClick={onClick} />
        )
    }

    return (
        <div className={className}></div>
    )
}
