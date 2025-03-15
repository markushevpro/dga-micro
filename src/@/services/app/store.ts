import { create } from 'zustand'

import { flows } from '@/services/flow'

import type { TAnswers, TQuestion, TQuestionName, TQuestions } from '@/services/questions'

interface AppStoreData
{
    select: boolean
    result: boolean
    edit: TQuestionName | undefined
    flow: string | undefined
    answers: TAnswers
    steps: TQuestions<TQuestion>
}

interface AppStoreActions
{
    reset: () => void
    showResult: () => void
    setEdit: ( step: TQuestionName ) => void
    setEditEvent: ( step: TQuestionName ) => () => void
    setFlow: ( name: string ) => () => void
    setAnswer: ( step: TQuestionName ) => ( value: string ) => void
}

export
interface AppStore
    extends
    AppStoreData,
    AppStoreActions
{}

const initial: AppStoreData = {
    select:  true,
    result:  false,
    edit:    undefined,
    flow:    undefined,
    answers: {},
    steps:   {}
}

export
const useAppStore = create<AppStore>(
    ( set ) => ({
        ...initial,

        reset: () => { set({ ...initial }) },

        showResult: () => { set({
            edit:   undefined,
            result: true
        }) },

        setEdit: ( step: TQuestionName ) => { set({ edit: step }) },

        setEditEvent: ( step: TQuestionName ) => () => { set({ edit: step }) },

        setFlow: ( name: string ) => () => {
            set({
                ...initial,
                flow:   name,
                steps:  flows[ name ]?.questions ?? {},
                select: false
            })
        },

        setAnswer: ( step: TQuestionName ) => ( value: string ) => {
            set( store => ({
                answers: {
                    ...store.answers,
                    [ step ]: value
                }
            }))
        }
    })
)
