import { create } from 'zustand'

import type { TQuestions, TQuestion, TQuestionName } from './types'

import { getStepsPayload } from './helpers'

export
interface QuestionStoreData
{
    steps: TQuestions<TQuestion> | undefined
    isFirst: boolean | undefined
    current: TQuestionName | undefined
    next: TQuestionName | undefined
    prev: TQuestionName | undefined
    question: TQuestion | undefined
}

interface QuestionStoreActions
{
    setSteps: ( steps: TQuestions<TQuestion> ) => void
    setStep: ( step: TQuestionName ) => void
    reset: () => void
}

interface QuestionsStore
    extends
    QuestionStoreData,
    QuestionStoreActions
{}

const initial: QuestionStoreData = {
    steps:    undefined,
    isFirst:  false,
    current:  undefined,
    next:     undefined,
    prev:     undefined,
    question: undefined
}

export
const useQuestionStore = create<QuestionsStore>(( set ) => ({
    ...initial,

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
        set( initial )
    }
}))
