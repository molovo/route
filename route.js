/**
 * Perform a regex match on a URL, and return the callback with arguments
 * @param  {String}   rt       The route to be parsed
 * @param  {Function} callback The callback function. Values matched are passed as parameters
 * @return {Function}          callback()
 */
function route( rt, callback ) {
  var i, types, args = matches = [],
    path = window.location.pathname;

  /**
   * Placeholders for certain route types
   * @type {Object}
   */
  types = {
    num: '([0-9]+)',
    alpha: '([a-zA-Z]+)',
    slug: '([a-zA-Z0-9-]+)',
    domain: '([a-zA-Z0-9\.-]+)'
  }

  // If no placeholders or regex is detected,
  // check the route as a string against location.pathname
  if ( !rt.match( new RegExp( '[\{\}\(\)]' ) ) ) {
    return path === rt ? callback() : false;
  }

  // Replace placeholders with the relevant regex
  for ( i in types ) {
    rt = rt.replace( '{' + i + '}', types[ i ] );
  }

  // Check the route for matches
  matches = path.match( new RegExp( rt ) );

  // Modify the matches array to only include actual matches
  if ( matches ) {
    matches.index = null;
    matches.input = null;

    for ( i = 1; i < matches.length; i++ ) {
      args.push( matches[ i ] );
    }

    // Return the callback with matches applied as arguments
    return callback.apply( this, args );
  }

  // No matches exist, so return false
  return false;
}