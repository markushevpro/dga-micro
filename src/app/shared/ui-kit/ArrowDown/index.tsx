import { ArowBack } from '@rsuite/icons'

interface IArrowDownProps {
    visible?: boolean
}

export default
function ArrowDown
({ visible }: IArrowDownProps )
{
    return (
        <div style={{ textAlign: 'center' }}>
            { visible && <ArowBack style={{ transform: 'rotate(-90deg)' }} /> }
        </div>
    )
}
