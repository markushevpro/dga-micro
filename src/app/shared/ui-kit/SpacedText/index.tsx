import type { PropsWithChildren } from 'react'

export default
function SpacedText
({ children }: PropsWithChildren )
{
    if ( !children ) {
        return null
    }

    return (
        <>
            { ' ' }
            { children }
            { ' ' }
        </>
    )
}
