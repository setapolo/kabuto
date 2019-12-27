console.log(
    (function(a){
        var f=function(c){
            (c)?a.push(c):0;
            return (c)?f:a;
        }
        return f;
    })
    ([])
    (function(){console.log(1)})
    (function(){console.log(2)})
    (function(){console.log(3)})
    ().map(function(c){return c.call()})
)