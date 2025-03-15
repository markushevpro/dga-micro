import cn                  from 'classnames'
import { Stack as RStack } from 'rsuite'

import type { PropsWithChildren } from 'react'

import styles from './stack.module.css'

interface PStack
    extends
    PropsWithChildren
{
    className?: string
    vertical?: boolean
    verticalMobile?: boolean
    spacing?: number
}

export
function Stack
({ vertical, verticalMobile, spacing, className, children }: PStack )
{
    return (
        <RStack
            spacing={spacing}
            className={cn(
                styles.container,
                vertical
                    ? styles.vertical
                    : styles.horizontal,
                verticalMobile && styles.verticalMobile,
                className
            )}
        >
            { children }
        </RStack>
    )
}
