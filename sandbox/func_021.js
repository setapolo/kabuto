 (function(rr){
    var s='';
    var o={};
    var a=[];
    var f=function(){};
    var set=function(c){
        ss= Object.prototype.toString.call(c).slice(8, -1);
        a.push(c);
        o=Object.assign(o,c);
        return (c!=null)?set:map;
    };
    var map=function(c){
        ss= Object.prototype.toString.call(c).slice(8, -1);
        return (c!=null)?map:set;
    };
    set(rr);
    rr.set=set;            
    rr.map=map;            
    return set;
})
(/type/)
    (Object)("prototype")("toString")("call")(/slice/)([8,-1])(
`abcd
efg`
        )(3)(4)("join")( )("type")(-1)("1")("1")(1)(1)
    ;

