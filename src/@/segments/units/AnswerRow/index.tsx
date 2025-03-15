import { FlexboxGrid } from 'rsuite'

import type { ReactNode } from 'react'

import styles from './answer-row.module.css'

interface PAnswerRow
{
    prepend: string | undefined
    value: string | undefined
    actions: ReactNode | undefined
}

export
function AnswerRow
({ prepend, value, actions }: PAnswerRow )
{
    return (
        <FlexboxGrid align='middle'>
            <FlexboxGrid.Item
                className={styles.left}
                colspan={12}
            >
                <span className="color-faded">
                    { prepend }
                </span>
                &nbsp;
            </FlexboxGrid.Item>

            <FlexboxGrid.Item className={styles.right} colspan={12}>
                { value }
                { actions }
            </FlexboxGrid.Item>
        </FlexboxGrid>
    )
}
