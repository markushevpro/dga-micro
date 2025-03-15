import { useMemo } from 'react'

import { EditFlow }         from '@/flows/Edit'
import { QuestionsFlow }    from '@/flows/Questions'
import { ResultScreen }     from '@/screens/Result'
import { SelectFlowScreen } from '@/screens/Select'
import { useAppStore }      from '@/services/app'
import { useHookResult }    from '@/shared/hooks/useHookResult'

import type { ReactNode } from 'react'

interface HMainFlow
{
    content: ReactNode
}

export
function useMainFlow
(): HMainFlow
{
    const { edit, result, select } = useAppStore()

    const content = useMemo(
        () => {
            if ( edit ) {
                return (
                    <EditFlow />
                )
            }

            if ( result ) {
                return (
                    <ResultScreen />
                )
            }

            if ( select ) {
                return (
                    <SelectFlowScreen />
                )
            }

            return <QuestionsFlow />
        },
        [ edit, result, select ]
    )

    return useHookResult({ content })
}
