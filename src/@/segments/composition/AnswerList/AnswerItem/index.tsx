import { AnswerActions } from '@/segments/features/AnswerActions'
import { AnswerRow }     from '@/segments/units/AnswerRow'
import { ArrowDown }     from '@/shared/ui-kit/ArrowDown'
import { Stack }         from '@/shared/ui-kit/Stack'

import type { ResultItem } from '@/services/flow'

import styles from './answer-item.module.css'

interface PAnswerItem
    extends
    ResultItem
{
    last?: boolean
    prepend: string
}

export
function AnswerItem
({ step, value, last, prepend }: PAnswerItem )
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
