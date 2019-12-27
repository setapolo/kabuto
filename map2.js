(function(a){
    var f=function(c){
        (c)?a.push(c):0;
        return (c)?f:a;
    }
    return f;
})([])(1)(2)(3)(4)().map(
function(aa){
    f=function(c,i,a){
        c=aa[i]*c;
        console.log(c)
        return f
    }
    return f
}([2,2,2,2])(10)(20)
)