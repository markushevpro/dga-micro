import type { ReactNode }   from 'react'
import type { IResultItem } from '~/services/flow'

import AnswerActions from '~/segments/behavior/AnswerActions'
import AnswerRow     from '~/segments/elements/AnswerRow'
import ArrowDown     from '~/shared/ui-kit/ArrowDown'
import Stack         from '~/shared/ui-kit/Stack'

import styles from './answer-item.module.css'

interface IAnswerItemProps
extends IResultItem
{
    last?:   boolean
    prepend: string
}

export default
function AnswerItem
({ step, value, last, prepend }: IAnswerItemProps ): ReactNode
{
    return (
        <Stack
            vertical
            className={styles.container}
            spacing={10}
        >
            <AnswerRow
                actions={<AnswerActions step={step} />}
                prepend={prepend}
                value={value}
            />

            <ArrowDown visible={!last} />
        </Stack>
    )
}
