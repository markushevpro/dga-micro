import { ArowBack } from '@rsuite/icons'

interface PArrowDown
{
    visible?: boolean
}

export
function ArrowDown
({ visible }: PArrowDown )
{
    return (
        <div style={{ textAlign: 'center' }}>
            { visible && <ArowBack style={{ transform: 'rotate(-90deg)' }} /> }
        </div>
    )
}
