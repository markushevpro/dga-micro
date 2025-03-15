import { getPrepend } from '@/services/flow'

import { AnswerItem }    from './AnswerItem'
import { useAnswerList } from './hook'

export
function AnswerList
()
{
    const { items, flow } = useAnswerList()

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
