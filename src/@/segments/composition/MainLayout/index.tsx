import type { PropsWithChildren } from 'react'

export
function MainLayout
({ children }: PropsWithChildren )
{
    return (
        <div className="center-container" style={{ width: '100%' }}>
            { children }
        </div>
    )
}
