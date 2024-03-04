import { useEffect, useState } from 'react'

import DependencyItem   from '@/screens/Result/lib/DependencyItem'
import { extractItems } from '@/screens/Result/lib/helpers'

import type { IResultItem, IDependencyListProps } from '@/screens/Result/lib/types'
import type { ReactNode }                         from 'react'

export default function DependencyList
({ answers, prepends, onEdit }: IDependencyListProps ): ReactNode
{
    const [ items, $items ] = useState<IResultItem[]>([])

    useEffect(() => {
        $items( extractItems( answers ))
    }, [ answers ])

    return (
        <>
            {
                items.map(( item, index ) => (
                    <DependencyItem
                        {...item}
                        key={item.step}
                        backArrow={index < items.length - 1}
                        prepend={prepends?.[ item.step ]}
                        onEdit={onEdit( item.step )}
                    />
                ))
            }
        </>
    )
}
