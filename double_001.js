console.log(
(function(g){
  return function(a){
    var f = function(c){
       return g(f)(a)(c);
    }
    return f;
  }
})(function(f){
  return function(a){
    var g = function(c){
      (c)?a['push'](c):0;
      return (c)?g:a['reduce'](function(p,c,i,a){return p*c}); 
    }
    return g;
  }
})({
  'm':[],
  'push':function(c){this.m.push(c)},
  'reduce':function( callback ) {
    var t = this.m, len = t.length >>> 0, k = 0, value;
    if ( arguments.length >= 2 ) {
      value = arguments[1];
    } else {
      while ( k < len && ! k in t ) k++;
      value = t[ k++ ];
    }
    for ( ; k < len ; k++ ) {
      if ( k in t ) {
         value = callback( value, t[k], k, t );
      }
    }
    return value;
  }})
  (function(){console.log(1)})("a")(3)(NaN)
)
