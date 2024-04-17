import { useEffect, useMemo, useState } from 'react'

import { extractAnswersList, type IResultItem, type TAnswers } from '~/services/flow'

interface IUseAnswerListResult
{
    items: IResultItem[]
}

export
function useAnswerList
( answers: TAnswers ): IUseAnswerListResult
{
    const [ items, $items ] = useState<IResultItem[]>([])

    useEffect(() => {
        $items( extractAnswersList( answers ))
    }, [ answers ])

    return useMemo(() => ({ items }), [ items ])
}
