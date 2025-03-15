type TPartialRecord<T> = Partial<Record<keyof T, unknown>>

export
function getKeys
<T extends TPartialRecord<T>>
( obj: T ): ( keyof T )[]
{
    return Object.keys( obj ) as ( keyof T )[]
}

export
function extract
<T extends TPartialRecord<T>>
( obj: T, keys: ( keyof T )[]): Partial<T>
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
( keys: ( keyof T )[])
{
    return ( obj: T ) => extract( obj, keys )
}

export
function exclude
<T extends TPartialRecord<T>>
( obj: T, ex: ( keyof T )[]): Partial<T>
{
    const res: Partial<T> = {}
    const keys            = getKeys( obj )

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
( keys: ( keyof T )[])
{
    return ( obj: T ) => exclude( obj, keys )
}
