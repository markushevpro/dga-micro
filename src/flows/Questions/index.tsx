import { useEffect, useState } from 'react'

import QuestionScreen                                       from '@/screens/Question'
import { TQuestionName, TQuestion, extractQuestionStrings } from '@/services/flow'

import { findStep }            from './lib/helpers'
import { IQuestionsFlowProps } from './lib/types'

export default function QuestionsFlow ({ steps, answers, onAnswer, onFinish }: IQuestionsFlowProps ) {
    const [ first, $first ] = useState<TQuestionName>()
    const [ step, $step ] = useState<TQuestionName>()
    const [ current, $current ] = useState<TQuestion>()

    const nextStep = () => {
        const next = findStep( steps, step, 1 )

        if ( !next ) {
            onFinish()
            return
        }

        $step( next )
    }

    const prevStep = () => {
        const prev = findStep( steps, step, -1 )

        if ( !!prev ) {
            $step( prev )
        }
    }

    useEffect(() => {
        $current( step && steps[ step ])
    }, [ steps, step ])

    useEffect(() => {
        const first = Object.keys( steps )[ 0 ] as TQuestionName

        $first( first )
        $step( step ?? first )
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
