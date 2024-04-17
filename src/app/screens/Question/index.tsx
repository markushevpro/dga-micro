import type { ReactNode }       from 'react'
import type { TQuestionStruct } from '~/services/flow'

import QuestionRow from '~/segments/appearance/QuestionRow'
import ArrowNext   from '~/shared/ui-kit/ArrowNext'
import ArrowPrev   from '~/shared/ui-kit/ArrowPrev'
import Stack       from '~/shared/ui-kit/Stack'

import styles from './question-screen.module.css'

interface IQuestionScreenProps
    extends TQuestionStruct<string | undefined>
{
    first?:      boolean
    value:       string | undefined
    onNext:      () => void
    onPrevious?: () => void
    onAnswer:    (( value: string ) => void ) | undefined
}

export default
function QuestionScreen
({ first, value, onAnswer, onPrevious, onNext, ...strings }: IQuestionScreenProps ): ReactNode
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
