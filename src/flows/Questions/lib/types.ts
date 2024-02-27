import { TQuestions, TAnswers, TQuestionName } from '@/services/flow'

export interface IQuestionsFlowProps {
    steps: TQuestions
    answers: TAnswers
    onAnswer: ( step: TQuestionName ) => ( value: string ) => void
    onFinish: () => void
}
