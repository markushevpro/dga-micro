import { allQuestions } from '@/services/flow'

import type { IResultItem } from './types'
import type { TAnswers }    from '@/services/flow'

export const extractItems = ( answers: TAnswers ): IResultItem[] => {
    return allQuestions
        .filter( step => !!answers[ step ])
        .map( step => ({
            step,
            value: answers[ step ]
        }))
}
