import type { PropsWithChildren, ReactNode } from 'react'

export default function MainLayout
({ children }: PropsWithChildren ): ReactNode
{
    return (
        <div className="center-container" style={{ width: '100%' }}>
            { children }
        </div>
    )
}
