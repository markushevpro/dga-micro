export interface IQuestionScreenProps {
    first?: boolean
    before?: string
    after?: string
    placeholder?: string
    value?: string
    onAnswer?: ( value: string ) => void
    onNext: () => void
    onPrevious?: () => void
}
