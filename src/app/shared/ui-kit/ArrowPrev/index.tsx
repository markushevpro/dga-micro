import { ArowBack }   from '@rsuite/icons'
import { IconButton } from 'rsuite'

interface IArrowPrevProps {
    visible?:   boolean
    className?: string
    onClick?:   () => void
}

export default
function ArrowPrev
({ visible, className, onClick }: IArrowPrevProps )
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
