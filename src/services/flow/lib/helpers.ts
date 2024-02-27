import { TAnswers, TFlowConfig, TFlows, TQuestion } from './types'

//TODO: Refactor
export function functionize ( raw: TFlowConfig[]) {
    const res: any = {}

    raw.forEach( config => {
        const flow = config.name
        res[ flow ] = {
            ...config,
            questions: { ...config.questions }
        }

        Object.keys( res[ flow ].questions ).forEach( step => {
            Object.keys( res[ flow ].questions[ step ]).forEach( key => {
                const
                    value = res[ flow ].questions[ step ][ key ]

                if ( typeof value === 'string' ) {
                    res[ flow ].questions[ step ][ key ] = () => value
                }
            })
        })
    })

    return res as TFlows
}

export function extractQuestionStrings ( question: TQuestion | undefined, answers: TAnswers ) {
    return {
        after:       question?.after?.( answers ),
        before:      question?.before?.( answers ),
        placeholder: question?.placeholder?.( answers )
    }
}
