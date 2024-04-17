type TPartialRecord<T> = Partial<Record<keyof T, unknown>>

export
function getKeys
<T extends TPartialRecord<T>>
( obj: T ): Array<keyof T>
{
    return Object.keys( obj ) as Array<keyof T>
}

export
function extract
<T extends TPartialRecord<T>>
( obj: T, keys: Array<keyof T> ): Partial<T>
{
    const res: Partial<T> = {}

    keys.forEach( key => {
        res[ key ] = obj[ key ]
    })

    return res
}

export
function extractMap
<T extends TPartialRecord<T>>
( keys: Array<keyof T> )
{
    return ( obj: T ) => extract( obj, keys )
}

export
function exclude
<T extends TPartialRecord<T>>
( obj: T, ex: Array<keyof T> ): Partial<T>
{
    const res: Partial<T> = {}
    const keys = getKeys( obj )

    keys.forEach( key => {
        if ( !ex.includes( key )) {
            res[ key ] = obj[ key ]
        }
    })

    return res
}

export
function excludeMap
<T extends TPartialRecord<T>>
( keys: Array<keyof T> )
{
    return ( obj: T ) => exclude( obj, keys )
}
