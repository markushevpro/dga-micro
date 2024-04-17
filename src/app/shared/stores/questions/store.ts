import type { IQuestionsStore }                      from './types'
import type { TQuestion, TQuestionName, TQuestions } from '~/services/flow'

import { create } from 'zustand'

import { getStepsPayload }      from './helpers'
import { questionStoreInitial } from './initial'

export
const useQuestionStore = create<IQuestionsStore>(
    ( set ) => ({
        ...questionStoreInitial,
        setSteps: ( steps: TQuestions<TQuestion> ) => {
            set(
                store => ({
                    ...getStepsPayload( steps, store.current ),
                    steps
                })
            )
        },
        setStep: ( step: TQuestionName ) => {
            set(
                store => ( getStepsPayload( store.steps, step ))
            )
        },
        reset: () => {
            set( questionStoreInitial )
        }
    })
)
