import type { TQuestionName, TQuestion, TQuestions } from '~/services/flow'

import { useEffect, useMemo, useCallback, useState } from 'react'

import { useQuestionStoreActions, useQuestionStoreData } from '~/shared/stores/questions'

interface IUseQuestioFlowResult
{
    isFirst?: boolean
    current:  TQuestionName | undefined
    question: TQuestion | undefined
    next:     () => void
    prev:     () => void
}

export
function useQuestionFlow
( steps: TQuestions<TQuestion>, onFinish: () => void ): IUseQuestioFlowResult
{
    const [ currentSteps, $currentSteps ] = useState<TQuestions<TQuestion>>()

    const { isFirst, current, next, prev, question } = useQuestionStoreData()
    const { setStep, setSteps, reset } = useQuestionStoreActions()

    const nextStep = useCallback(
        (): void => {
            if ( !next ) {
                onFinish()
                return
            }

            setStep( next )
        },
        [ next, setStep, onFinish ]
    )

    const prevStep = useCallback(
        (): void => {
            if ( prev ) {
                setStep( prev )
            }
        },
        [ prev, setStep ]
    )

    useEffect(() => {
        if ( steps !== currentSteps ) {
            reset()
            $currentSteps( steps )
        }

        setSteps( steps )
    }, [ steps, currentSteps, reset, setSteps ])

    return useMemo(
        () => ({
            current,
            question,
            isFirst,
            next: nextStep,
            prev: prevStep
        }),
        [ current, isFirst, question, nextStep, prevStep ]
    )
}
