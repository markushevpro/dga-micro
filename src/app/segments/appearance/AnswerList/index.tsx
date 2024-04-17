import type { ReactNode } from 'react'

import AnswerItem           from '~/segments/appearance/AnswerItem'
import { getPrepend }       from '~/services/flow'
import { useMainStoreData } from '~/shared/stores/main'

import { useAnswerList } from './hooks/useAnswerList'

export default
function AnswerList
(): ReactNode
{
    const { answers, flow } = useMainStoreData()
    const { items } = useAnswerList( answers )

    return (
        <>
            {
                items.map(( item, index ) => (
                    <AnswerItem
                        {...item}
                        key={item.step}
                        last={index === items.length - 1}
                        prepend={getPrepend( flow, item.step )}
                    />
                ))
            }
        </>
    )
}
