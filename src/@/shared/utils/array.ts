export
function recordToArray
( record: Record<string, unknown> ): unknown[]
{
    return Object.values( record )
}
