import type { IMainStore }    from './types'
import type { TQuestionName } from '~/services/flow'

import { create } from 'zustand'

import flows from '~/services/flow'

import { mainStoreInitial } from './initial'

export
const useMainStore = create<IMainStore>(
    ( set ) => ({
        ...mainStoreInitial,
        reset:      () => { set({ ...mainStoreInitial }) },
        showResult: () => { set({
            edit:   undefined,
            result: true
        }) },
        setEdit:      ( step: TQuestionName ) => { set({ edit: step }) },
        setEditEvent: ( step: TQuestionName ) => () => { set({ edit: step }) },
        setFlow:      ( name: string ) => () => {
            set({
                ...mainStoreInitial,
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
