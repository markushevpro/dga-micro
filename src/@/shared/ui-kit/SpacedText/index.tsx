import type { PropsWithChildren } from 'react'

export
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
