import { TAnswers, allQuestions } from '@/services/flow'

import { IResultItem } from './types'

export const extractItems = ( answers: TAnswers ): IResultItem[] => {
    return allQuestions
        .filter( step => !!answers[ step ])
        .map( step => ({
            step,
            value: answers[ step ]
        }))
}
