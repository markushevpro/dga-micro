import QuestionScreen                            from '~/screens/Question'
import { extractQuestionStrings }                from '~/services/flow'
import { useMainStoreActions, useMainStoreData } from '~/shared/stores/main'

import { useQuestionFlow } from './hooks/useQuestionFlow'

export default
function QuestionsFlow
()
{
    const { steps, answers } = useMainStoreData()
    const { showResult, setAnswer } = useMainStoreActions()

    const { current, isFirst, question, next, prev } = useQuestionFlow( steps, showResult )

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
