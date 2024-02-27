import { TQuestion, TQuestionName, TQuestions } from '@/services/flow'

export const findStep = ( steps: TQuestions<TQuestion>, current: TQuestionName | undefined, offset: number ): false | TQuestionName => {
    if ( !current ) {
        return false
    }

    const
        keys = Object.keys( steps ),
        index = keys.indexOf( current ),
        search = index + offset

    if ( search >= keys.length || search < 0 ) {
        return false
    }

    return keys[ search ] as TQuestionName
}
