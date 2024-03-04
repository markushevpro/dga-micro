import cn                  from 'classnames'
import { Stack as RStack } from 'rsuite'

import styles from './Stack.module.css'

import type { PropsWithChildren, ReactNode } from 'react'

interface IStackProps extends PropsWithChildren {
    className?: string
    vertical?: boolean
    verticalMobile?: boolean
    spacing?: number
}

export default function Stack
({ vertical, verticalMobile, spacing, className, children }: IStackProps ): ReactNode
{
    return (
        <RStack className={cn( styles.container, vertical ? styles.vertical : styles.horizontal, verticalMobile && styles.verticalMobile, className )} spacing={spacing}>
            { children }
        </RStack>
    )
}
