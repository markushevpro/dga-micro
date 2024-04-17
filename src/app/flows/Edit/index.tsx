import QuestionScreen                            from '~/screens/Question'
import { extractQuestionStrings }                from '~/services/flow'
import { useMainStoreActions, useMainStoreData } from '~/shared/stores/main'

export default
function EditFlow
()
{
    const { edit, steps, answers } = useMainStoreData()
    const { setAnswer, showResult } = useMainStoreActions()

    if ( !edit ) {
        return null
    }

    return (
        <QuestionScreen
            first
            value={answers[ edit ]}
            onAnswer={setAnswer( edit )}
            onNext={showResult}
            {...extractQuestionStrings( steps[ edit ], answers )}
        />
    )
}
