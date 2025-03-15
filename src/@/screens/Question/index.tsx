import { QuestionRow } from '@/segments/composition/QuestionRow'
import { ArrowNext }   from '@/shared/ui-kit/ArrowNext'
import { ArrowPrev }   from '@/shared/ui-kit/ArrowPrev'
import { Stack }       from '@/shared/ui-kit/Stack'

import type { TQuestionStruct } from '@/services/questions'

import styles from './question-screen.module.css'

interface PQuestionScreen
    extends
    TQuestionStruct<string | undefined>
{
    first?: boolean
    value: string | undefined
    onNext: () => void
    onPrevious?: () => void
    onAnswer: (( value: string ) => void ) | undefined
}

export
function QuestionScreen
({ first, value, onAnswer, onPrevious, onNext, ...strings }: PQuestionScreen )
{
    return (
        <Stack className={styles.container} spacing={10}>
            <ArrowPrev className={styles.placeholder} visible={!first} onClick={onPrevious} />

            <QuestionRow
                {...strings}
                value={value}
                onChange={onAnswer}
                onEnter={onNext}
            />

            <ArrowNext disabled={!value} onClick={onNext} />
        </Stack>
    )
}
