import { useEffect, useState } from 'react'

import { useAppStore }        from '@/services/app'
import { extractAnswersList } from '@/services/flow'
import { useHookResult }      from '@/shared/hooks/useHookResult'

import type { AppStore }   from '@/services/app'
import type { ResultItem } from '@/services/flow'

interface HAnswerList
    extends
    Pick<AppStore, 'flow'>
{
    items: ResultItem[]
}

export
function useAnswerList
(): HAnswerList
{
    const [ items, $items ] = useState<ResultItem[]>([])
    const { answers, flow } = useAppStore()

    useEffect(
        () => {
            $items( extractAnswersList( answers ))
        },
        [ answers ]
    )

    return useHookResult({
        items,
        flow
    })
}
