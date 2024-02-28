import { TAnswers, TQuestionName } from '@/services/flow'

export interface IResultScreenProps {
    answers: TAnswers
    prepends?: Partial<Record<TQuestionName, string>>
    onEdit: ( step: TQuestionName ) => () => void
    onReset: () => void
}

export interface IDependencyListProps {
    answers: TAnswers
    prepends?: Partial<Record<TQuestionName, string>>
    onEdit: ( step: TQuestionName ) => () => void
}

export interface IDependencyItemProps extends IResultItem {
    backArrow?: boolean
    prepend?: string
    onEdit?: () => void
}

export interface IResultItem {
    step: TQuestionName
    value?: string
}
