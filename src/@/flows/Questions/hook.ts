import { useEffect, useCallback, useState } from 'react'

import { useAppStore }      from '@/services/app'
import { useQuestionStore } from '@/services/questions'
import { useHookResult }    from '@/shared/hooks/useHookResult'

import type { TQuestionName, TQuestion, TQuestions } from '@/services/questions'

interface HQuestionFlow
{
    isFirst?: boolean
    current: TQuestionName | undefined
    question: TQuestion | undefined
    answers: Partial<Record<TQuestionName, string>>
    setAnswer: ( step: TQuestionName ) => ( value: string ) => void
    next: () => void
    prev: () => void
}

export
function useQuestionFlow
(): HQuestionFlow
{
    const [ currentSteps, $currentSteps ] = useState<TQuestions<TQuestion>>()

    const { steps, answers, showResult, setAnswer }                            = useAppStore()
    const { isFirst, current, next, prev, question, setStep, setSteps, reset } = useQuestionStore()

    const nextStep = useCallback(
        () => {
            if ( !next ) {
                showResult()
                return
            }

            setStep( next )
        },
        [ next, setStep, showResult ]
    )

    const prevStep = useCallback(
        () => {
            if ( prev ) {
                setStep( prev )
            }
        },
        [ prev, setStep ]
    )

    useEffect(
        () => {
            if ( steps !== currentSteps ) {
                reset()
                $currentSteps( steps )
            }

            setSteps( steps )
        },
        [ steps, currentSteps, reset, setSteps ]
    )

    return useHookResult({
        current,
        question,
        isFirst,
        answers,
        setAnswer,
        next: nextStep,
        prev: prevStep
    })
}
