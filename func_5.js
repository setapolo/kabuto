(function(rr){
    var g = function(){
        console.log("map",arguments);
        rr['ff'].apply(rr,arguments);
        (arguments[0]['map'])?(arguments[0]['map'](rr['ff'])):0;        
        return (arguments[0])?g:f;
    };
    var f=function(c){
        console.log("set",arguments);
        (typeof c == "function")?(rr['ff']=c):0;
        return (arguments[0])?f:g;
    };
    return f;
})({})
(function(c){
    console.log(c);
    return c*2;
})()
(124)(111)([1,2,3,4])(113)(114);
