const fs = require( 'fs' )
const path = require( 'path' )

const targetDir =  fixDelim( path.join( __dirname, '../src/@/' ))

const config = {
    tops: [ 'entrypoints', 'flows', 'screens', 'segments', 'services', 'shared' ],
    allowSiblings: [ 'flows', 'services', 'shared' ],
    special: {
        'segments': {
            tops: [ 'composition', 'features', 'units' ],
            allowSiblings: [ 'composition', 'features' ]
        }
    }
}

const ignore = []
const known = []

checkImports()
checkJSXInServices()

/* --------------------------------------
   Main logic
   -------------------------------------- */

function checkJSXInServices ()
{
    const filelist = getAllTS( `${targetDir}/services` ).filter( name => name.split( '.' ).pop().toLowerCase() === 'tsx' )

    if ( filelist.length > 0 ) {
        console.log( '[TSX] This files now allowed to be a part of services:' )
        console.log( makeInnerList( filelist ))
    }
}

function checkImports ()
{
    const filelist = getAllTS( targetDir )
    const files = filelist.map( extractImports ).filter( hasImports )

    files.forEach( checkFileImports )

    const errors = files.filter( hasError )

    if ( errors.length > 0 ) {
        console.log( '[IMPORTS] This files has wrong imports:' )
        errors.forEach( file => {
            console.log( `- ${file.name}:` )
            console.log( `( ignore: ${file.path} )` )
            console.log( `( allowed: ${getAllowedImports( file, config ).join( ', ' )} )`)
            console.log( makeInnerList( file.errors ))
            console.log( '\n' )
        })
    }
}

function extractImports ( filename )
{
    const p = filename.replace( targetDir, '' ).replace( filename.split( '/' ).pop(), '' ).replace( /\/$/, '' )
    const top = p.split( '/' )[0]

    const res = {
        name: filename,
        path: p,
        top,
        relative: p.replace( `${top}/`, '' ),
        errors: [],
        imports: []
    }

    const content = fs.readFileSync( filename, { encoding: 'utf-8' })

    res.imports = Array.from( content.matchAll(/import .* from '((@\/|a).*)'/g)).map( line => line[1] )

    return res
}

function checkFileImports ( file )
{
    const allowedImports = getAllowedImports( file, config )

    file.imports.forEach( line => {
        if ( !checkImport( line, allowedImports )) {
            file.errors.push( line )
        }
    })
}

function checkImport ( line, allowed )
{
    if ( !['~', '@'].includes( line[0] )) {
        return true
    }

    if ( !line.includes( '@' )) {
        return true
    }

    const top = line.replace( '~/@/', '' ).replace( '@/arch/', '' )

    return allowed.some(ref => top.includes( ref ))
}

function getAllowedImports ( file, cfg )
{    
    let subs = []

    if ( cfg.special && Object.keys( cfg.special ).includes( file.top )) {
        subs = getAllowedImports( dropDown( file ), makeSubConfig( cfg, file.top )).map( seg => `${file.top}/${seg}`)
    }

    if ( [ ...ignore, ...known ].some( p => file.path.includes( p ) || file.name.includes( p ))) {
        return [ ...cfg.tops, ...subs ]
    }

    const prelist = cfg.tops.slice( cfg.tops.indexOf( file.top ) + 1 )

    if ( cfg.allowSiblings.includes( file.top )) {
        prelist.push( file.top )
    }

    return [ ...prelist, ...subs ]
}
/* --------------------------------------
   File manipulations
   -------------------------------------- */

function getAllTS ( target )
{
    const all = fixDelims( readDir( target ))

    return all.filter( filename => isExt( filename, [ 'ts', 'tsx' ]))
}

function readDir ( dir )
{
    let res = []

    fs.readdirSync( dir ).forEach(file => {
        const filepath = path.resolve( dir, file )
        const stats = fs.statSync( filepath )

        if ( stats.isDirectory()) {
            res = [ ...res, ...readDir( filepath )]
        } else {
            res.push( filepath )
        }
    })

    return res
}

/* --------------------------------------
   Filters
   -------------------------------------- */

function hasImports ( file )
{
    return file.imports.length > 0
}

function hasError ( file )
{
    return file.errors.length > 0
}

/* --------------------------------------
   Helpers
   -------------------------------------- */

function makeInnerList ( items )
{
    return items.map( item => `- - ${item}` ).join( '\n' )
}

function fixDelim ( filename )
{
    return filename.replace( /\\+/g, '/' )
}

function fixDelims ( files )
{
    return files.map( fixDelim )
}

function isExt ( filename, allowed )
{
    const ext = filename.split( '.' ).pop()

    return allowed.includes( ext )
}

function makeSubConfig ( cfg, key )
{
    const sub = cfg.special[ key ]

    if ( sub ) {
        return { 
            ...sub, 
            tops: [ 
                ...sub.tops 
            ]
        }
    } else {
        return cfg
    }
}

function dropDown ( file )
{
    const path = file.path.replace( `${file.top}/`, '' )
    const top = path.split( '/' )[0]
    const relative = file.relative.replace( `${top}/`, '' )

    return {
        ...file,
        path,
        top,
        relative
    }
}