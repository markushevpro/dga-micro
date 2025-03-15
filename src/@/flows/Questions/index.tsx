import { QuestionScreen }         from '@/screens/Question'
import { extractQuestionStrings } from '@/services/flow'

import { useQuestionFlow } from './hook'

export
function QuestionsFlow
()
{
    const { current, isFirst, question, answers, next, prev, setAnswer } = useQuestionFlow()

    return (
        <QuestionScreen
            first={isFirst}
            value={current && answers[ current ]}
            onAnswer={current && setAnswer( current )}
            onNext={next}
            onPrevious={prev}
            {...extractQuestionStrings( question, answers )}
        />
    )
}
