import { QuestionScreen }         from '@/screens/Question'
import { useAppStore }            from '@/services/app'
import { extractQuestionStrings } from '@/services/flow'

export
function EditFlow
()
{
    const { edit, steps, answers, setAnswer, showResult } = useAppStore()

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
