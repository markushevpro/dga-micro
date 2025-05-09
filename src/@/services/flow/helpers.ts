import type { TFlowConfig, TFlow, TFlows, ResultItem }                                                                from './types'
import type { TQuestionDraft, TQuestion, TQuestionTextHandler, TQuestions, TQuestionName, TAnswers, TQuestionStruct } from '@/services/questions'

import { allQuestions, defaultPrepends } from './const'
import { flows }                         from './list'

function convertQuestionStringsToFunctions
( question: TQuestionDraft ): TQuestion
{
    const res: TQuestion = { placeholder: () => '' }

    Object.keys( question ).forEach( key => {
        const typedKey = key as keyof TQuestion
        const value    = question[ typedKey ]

        res[ typedKey ] = ( typeof value === 'string' )
            ? () => value
            : value as TQuestionTextHandler
    })

    return res
}

function createFlowQuestions
( questions: TQuestions<TQuestionDraft> ): TQuestions<TQuestion>
{
    const res: TQuestions<TQuestion> = {}

    Object.keys( questions ).forEach( step => {
        const name     = step as TQuestionName
        const question = questions[ name ] as TQuestion

        res[ name ] = convertQuestionStringsToFunctions( question )
    })

    return res
}

function createFlowFromConfig
( config: TFlowConfig ): TFlow
{
    const res: TFlow = {
        ...config,
        questions: createFlowQuestions( config.questions )
    }

    return res
}

export
function createFlowsFromConfig
( raw: TFlowConfig[]): TFlows
{
    const res: TFlows = {}

    raw.forEach( config => {
        const flow  = config.name
        res[ flow ] = createFlowFromConfig( config )
    })

    return res
}

export
function extractQuestionStrings
( question: TQuestion | undefined, answers: TAnswers ): TQuestionStruct<string>
{
    return {
        after:       question?.after?.( answers ),
        before:      question?.before?.( answers ),
        placeholder: question?.placeholder?.( answers ) ?? ''
    }
}

export
function extractAnswersList
( answers: TAnswers ): ResultItem[]
{
    return allQuestions
        .filter( step => !!answers[ step ])
        .map( step => ({
            step,
            value: answers[ step ]
        }))
}

export
function getPrepend
( flow: string | undefined, step: TQuestionName ): string
{
    return flows[ flow ?? '' ]?.prepends?.[ step ] ?? defaultPrepends[ step ]
}
