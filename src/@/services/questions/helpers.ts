import type { QuestionStoreData }                    from './store'
import type { TQuestions, TQuestion, TQuestionName } from './types'

export
function getFirstStep
( steps?: TQuestions<TQuestion> ): TQuestionName | undefined
{
    return Object.keys( steps ?? [])[ 0 ] as TQuestionName
}

export
function findStep
( steps: TQuestions<TQuestion> | undefined, current: TQuestionName | undefined, offset: number ): undefined | TQuestionName
{
    if ( !steps || !current ) {
        return
    }

    const keys   = Object.keys( steps )
    const index  = keys.indexOf( current )
    const search = index + offset

    if ( search >= keys.length || search < 0 ) {
        return
    }

    return keys[ search ] as TQuestionName
}

export
function getStepsPayload
( steps?: TQuestions<TQuestion>, current?: TQuestionName ): Omit<QuestionStoreData, 'steps'>
{
    const first = getFirstStep( steps )
    const step  = current ?? first

    return {
        current:  step,
        next:     findStep( steps, step, 1 ),
        prev:     findStep( steps, step, -1 ),
        isFirst:  steps && step ? step === first : false,
        question: steps && step && steps[ step ]
    }
}
