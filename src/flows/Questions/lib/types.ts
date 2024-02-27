import { TQuestions, TAnswers, TQuestionName, TQuestion } from '@/services/flow'

export interface IQuestionsFlowProps {
    steps: TQuestions<TQuestion>
    answers: TAnswers
    onAnswer: ( step: TQuestionName ) => ( value: string ) => void
    onFinish: () => void
}
