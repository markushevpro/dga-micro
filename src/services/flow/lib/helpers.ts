import { TAnswers, TFlow, TFlowConfig, TFlows, TQuestion, TQuestionDraft, TQuestionName, TQuestionTextHandler, TQuestions } from './types'

export function convertQuestionStringsToFunctions ( question: TQuestionDraft ): TQuestion {
    const res: TQuestion = { placeholder: () => '' }

    Object.keys( question ).forEach( key => {
        const typedKey = key as keyof TQuestion
        const value = question[ typedKey ]

        res[ typedKey ] = ( typeof value === 'string' )
            ? () => value
            : value as TQuestionTextHandler
    })

    return res
}

export function createFlowQuestions ( questions: TQuestions<TQuestionDraft> ): TQuestions<TQuestion> {
    const res: TQuestions<TQuestion> = {}

    Object.keys( questions ).forEach( step => {
        const name = step as TQuestionName
        const question = questions[ name ] as TQuestionDraft

        res[ name ] = convertQuestionStringsToFunctions( question )
    })

    return res
}

export function createFlowFromConfig ( config: TFlowConfig ): TFlow {
    const res: TFlow = {
        ...config,
        questions: createFlowQuestions( config.questions )
    }

    return res
}

export function createFlowsFromConfig ( raw: TFlowConfig[]) {
    const res: TFlows = {}

    raw.forEach( config => {
        const flow = config.name
        res[ flow ] = createFlowFromConfig( config )
    })

    return res
}

export function extractQuestionStrings ( question: TQuestion | undefined, answers: TAnswers ) {
    return {
        after:       question?.after?.( answers ),
        before:      question?.before?.( answers ),
        placeholder: question?.placeholder?.( answers )
    }
}
