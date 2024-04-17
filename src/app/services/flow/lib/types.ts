import type { TypeAttributes } from 'rsuite/esm/@types/common'

export
type TQuestionName = 'desire' | 'goal' | 'milestone' | 'step' | 'task' | 'action'

export
type TQuestionTextHandler = ( answers: TAnswers ) => string

export
type TQuestionDraft = TQuestionStruct<TQuestionTextHandler | string>

export
type TQuestion = TQuestionStruct<TQuestionTextHandler>

export
type TQuestions<T> = Partial<Record<TQuestionName, T>>

export
type TAnswers = Partial<Record<TQuestionName, string>>

export
type TFlows = Partial<Record<string, TFlow>>

export
type TFlowSelectHandler = ( name: string ) => () => void

export
interface TQuestionStruct<T>
{
    before?:     T
    after?:      T
    placeholder: T
}

export
interface TFlowInfo
{
    title:       string
    description: string
    prepends?:   Partial<Record<TQuestionName, string>>
    apperance:   TypeAttributes.Appearance
}

export
interface TFlowStruct<T>
    extends TFlowInfo
{
    questions: TQuestions<T>
}

export
interface TFlowConfig
    extends TFlowStruct<TQuestionDraft>
{
    name: string
}

export
interface TFlow
    extends TFlowStruct<TQuestion>
{}

export
interface IResultItem {
    step:  TQuestionName
    value: string | undefined
}
