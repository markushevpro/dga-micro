import type { ReactNode } from 'react'

import { FlexboxGrid } from 'rsuite'

import styles from './answer-row.module.css'

interface IAnswerRowProps {
    prepend: string | undefined
    value:   string | undefined
    actions: ReactNode | undefined
}

export default
function AnswerRow
({ prepend, value, actions }: IAnswerRowProps )
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
