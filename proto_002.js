 (function(){
    var set=function(c){
        console.log("set",c);
        return (c)?set:map;
    };
    var map=function(c){
        console.log("map",c);
        return (c)?map:set;
    };
    return set;
})
({})
    (1)(2)(3)()
    (4)(5)(6)();


