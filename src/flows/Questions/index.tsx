import { useEffect, useState } from 'react'

import QuestionScreen             from '@/screens/Question'
import { extractQuestionStrings } from '@/services/flow'

import { findStep } from './lib/helpers'

import type { IQuestionsFlowProps }      from './lib/types'
import type { TQuestionName, TQuestion } from '@/services/flow'
import type { ReactNode }                from 'react'

export default function QuestionsFlow
({ steps, answers, onAnswer, onFinish }: IQuestionsFlowProps ): ReactNode
{
    const [ first, $first ] = useState<TQuestionName>()
    const [ step, $step ] = useState<TQuestionName>()
    const [ current, $current ] = useState<TQuestion>()

    const nextStep = (): void => {
        const next = findStep( steps, step, 1 )

        if ( !next ) {
            onFinish()
            return
        }

        $step( next )
    }

    const prevStep = (): void => {
        const prev = findStep( steps, step, -1 )

        if ( prev ) {
            $step( prev )
        }
    }

    useEffect(() => {
        $current( step && steps[ step ])
    }, [ steps, step ])

    useEffect(() => {
        const first = Object.keys( steps )[ 0 ] as TQuestionName

        $first( first )
        $step( s => s ?? first )
    }, [ steps ])

    return (
        <QuestionScreen
            {...extractQuestionStrings( current, answers )}
            first={step === first}
            value={step && answers[ step ]}
            onAnswer={step && onAnswer( step )}
            onNext={nextStep}
            onPrevious={prevStep}
        />
    )
}
