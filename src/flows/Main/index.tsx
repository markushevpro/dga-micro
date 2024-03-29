/* eslint-disable max-statements */
// TODO: Refactor
import { useState } from 'react'

import QuestionsFlow                     from '@/flows/Questions'
import QuestionScreen                    from '@/screens/Question'
import ResultScreen                      from '@/screens/Result'
import SelectFlowScreen                  from '@/screens/Select'
import flows, { extractQuestionStrings } from '@/services/flow'

import type { TQuestion, TQuestionName, TQuestions } from '@/services/flow'
import type { ReactNode }                            from 'react'

export default function MainFlow
(): ReactNode
{
    const [ select, $select ] = useState<boolean>( true )
    const [ result, $result ] = useState<boolean>( false )
    const [ edit, $edit ] = useState<TQuestionName>()
    const [ flow, $flow ] = useState<string>()
    const [ answers, $answers ] = useState<Partial<Record<TQuestionName, string>>>({})
    const [ steps, $steps ] = useState<TQuestions<TQuestion>>({})

    const resetState = (): void => {
        $edit( undefined )
        $result( false )
        $flow( undefined )
        $steps({})
        $answers({})
        $select( true )
    }

    const showResult = (): void => {
        $edit( undefined )
        $result( true )
    }

    const selectFlow = ( name: string ) => () => {
        $flow( name )
        $steps( flows[ name ]?.questions ?? {})
        $select( false )
    }

    const setAnswer = ( step: TQuestionName ) => ( value: string ) => {
        $answers({
            ...answers,
            [ step ]: value
        })
    }

    const editAnswer = ( step: TQuestionName ) => () => {
        $edit( step )
    }

    if ( edit ) {
        return (
            <QuestionScreen
                first
                {...extractQuestionStrings( steps[ edit ], answers )}
                value={answers[ edit ]}
                onAnswer={setAnswer( edit )}
                onNext={showResult}
            />
        )
    }

    if ( result ) {
        return (
            <ResultScreen
                answers={answers}
                prepends={flows[ flow ?? '' ]?.prepends}
                onEdit={editAnswer}
                onReset={resetState}
            />
        )
    }

    if ( select ) {
        return (
            <SelectFlowScreen onSelect={selectFlow} />
        )
    }

    return (
        <QuestionsFlow
            answers={answers}
            steps={steps}
            onAnswer={setAnswer}
            onFinish={showResult}
        />
    )
}
