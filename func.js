console.log(
    (function(a){
        var f=function(c){
            (c)?a.push(c):0;
            return (c)?f:a;
        }
        return f;
    })
    ([])
    (function(c){console.log(c);return c})
    (function(c){console.log(c);return c})
    (function(c){console.log(c);return c})
    (function(c){console.log(c*2);return c})
    ().map(function(c,i,a){
        return ( typeof c == "function" )?c.apply(a,[i]):0}
        )
)