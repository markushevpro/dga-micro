// TODO: Refactor
import { Edit, ArowBack }          from '@rsuite/icons'
import { FlexboxGrid, IconButton } from 'rsuite'

import { prepends } from '@/services/flow'
import Stack        from '@/shared/layouts/Stack'

import styles from './DependencyItem.module.css'

import type { IDependencyItemProps } from '@/screens/Result/lib/types'
import type { ReactNode }            from 'react'

export default function DependencyItem
({ step, value, backArrow, prepend, onEdit }: IDependencyItemProps ): ReactNode
{
    return (
        <Stack
            vertical
            className={styles.container}
            spacing={10}
        >
            <FlexboxGrid align='middle'>
                <FlexboxGrid.Item
                    className={styles.left}
                    colspan={12}
                >
                    <span className="color-faded">{ prepend ?? prepends[ step ] }</span>
                &nbsp;
                </FlexboxGrid.Item>

                <FlexboxGrid.Item className={styles.right} colspan={12}>
                    { value }
                    <IconButton appearance='subtle' icon={<Edit />} onClick={onEdit} />
                </FlexboxGrid.Item>
            </FlexboxGrid>

            <div style={{ textAlign: 'center' }}>
                { backArrow && <ArowBack style={{ transform: 'rotate(-90deg)' }} /> }
            </div>
        </Stack>
    )
}
