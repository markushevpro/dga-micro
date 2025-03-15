import { useMemo } from 'react'

import { recordToArray } from '@/shared/utils/array'

export
function useHookResult
<T extends Record<string, unknown>>
( payload: T ): T
{
    return useMemo(
        () => payload,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        recordToArray( payload )
    )
}
