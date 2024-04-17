import type { TQuestionName, TQuestions, TQuestion } from '~/services/flow'

export
interface IMainStoreData {
    select:  boolean
    result:  boolean
    edit:    TQuestionName | undefined
    flow:    string | undefined
    answers: Partial<Record<TQuestionName, string>>
    steps:   TQuestions<TQuestion>
}

export
interface IMainStoreActions {
    reset:        () => void
    showResult:   () => void
    setEdit:      ( step: TQuestionName ) => void
    setEditEvent: ( step: TQuestionName ) => () => void
    setFlow:      ( name: string ) => () => void
    setAnswer:    ( step: TQuestionName ) => ( value: string ) => void
}

export
interface IMainStore
    extends IMainStoreData, IMainStoreActions {}
