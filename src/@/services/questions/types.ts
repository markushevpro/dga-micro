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
interface TQuestionStruct<T>
{
    before?: T
    after?: T
    placeholder: T
}
