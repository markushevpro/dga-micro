import type { UseBoundStore, StoreApi } from 'zustand'

import { extractMap, getKeys, excludeMap } from '@/app/shared/lib/utils/objects'

type TStoreHook<T> = () => T
type TZustandHook<T> = UseBoundStore<StoreApi<T>>

export
function generateStore
<Data, Actions>
( initial: Data, hook: TZustandHook<Data & Actions> ): [ TStoreHook<Data>, TStoreHook<Actions> ]
{
    return [
        (): Data => {
            return hook( extractMap( getKeys( initial ))) as Data
        },
        (): Actions => {
            return hook( excludeMap( getKeys( initial ))) as Actions
        }
    ]
}
