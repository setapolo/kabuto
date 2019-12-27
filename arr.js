console.log(
    (function(a){
        var f=function(c){
            (c)?a.push(c):0;
            return (c)?f:a;
        }
        return f;
    })([])(1)(2)(3)(4)()
)