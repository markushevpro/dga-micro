import { useEffect, useState } from 'react'

import DependencyItem                        from '../DependencyItem'
import { extractItems }                      from '../helpers'
import { IResultItem, IDependencyListProps } from '../types'

export default function DependencyList ({ answers, prepends, onEdit }: IDependencyListProps ) {
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
