import type { TQuestion, TQuestionDraft, TQuestionName, TQuestions } from '@/services/questions'
import type { TypeAttributes }                                       from 'rsuite/esm/@types/common'

export
type TFlows = Partial<Record<string, TFlow>>

export
type TFlowSelectHandler = ( name: string ) => () => void

export
interface TFlowInfo
{
    title: string
    description: string
    prepends?: Partial<Record<TQuestionName, string>>
    apperance: TypeAttributes.Appearance
}

export
interface TFlowStruct<T>
    extends
    TFlowInfo
{
    questions: TQuestions<T>
}

export
interface TFlowConfig
    extends
    TFlowStruct<TQuestionDraft>
{
    name: string
}

export
type TFlow = TFlowStruct<TQuestion>

export
interface ResultItem {
    step: TQuestionName
    value: string | undefined
}
