[1,2,3,4].map(
function(aa){
    f=function(c,i,a){
        c=aa[i]*c;
        console.log(c)
        return f
    }
    return f
}([2,2,2,2])(10)(20)
)