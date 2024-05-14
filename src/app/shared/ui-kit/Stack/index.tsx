import type { PropsWithChildren, ReactNode } from 'react'

import cn                  from 'classnames'
import { Stack as RStack } from 'rsuite'

import styles from './stack.module.css'

interface IStackProps
extends PropsWithChildren
{
    className?:      string
    vertical?:       boolean
    verticalMobile?: boolean
    spacing?:        number
}

export default
function Stack
({ vertical, verticalMobile, spacing, className, children }: IStackProps ): ReactNode
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
