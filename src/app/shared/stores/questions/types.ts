import type { TQuestion, TQuestionName, TQuestions } from '~/services/flow'

export
interface IQuestionStoreData {
    steps:    TQuestions<TQuestion> | undefined
    isFirst:  boolean | undefined
    current:  TQuestionName | undefined
    next:     TQuestionName | undefined
    prev:     TQuestionName | undefined
    question: TQuestion | undefined
}

export
interface IQuestionStoreActions {
    setSteps: ( steps: TQuestions<TQuestion> ) => void
    setStep:  ( step: TQuestionName ) => void
    reset:    () => void
}

export
interface IQuestionsStore
    extends IQuestionStoreData, IQuestionStoreActions {}
