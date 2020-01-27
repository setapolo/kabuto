 (function(rr){
//    var st={ff:[],a:[],i:0,args:[]};var back;var ret=null;
    var s='';
    var o={};
    var a=[];
    var f=function(){};
    var set=function(c){
        ss= Object.prototype.toString.call(c).slice(8, -1);
        console.log(ss);
        a.push(c);
        o=Object.assign(o,c);
        return (c)?set:map;
    };
    var map=function(c){
        ss= Object.prototype.toString.call(c).slice(8, -1);
//        console.log(ss);
        console.log(a);
        console.log(o);
//        s = (typeof c).split('')[0];
//        console.log("map",s);
//        console.log("map",c);
//        (s == "o") ? o=c:0;
//        (s == "s") ? f=o[c]:0;
//        (s == "n") ? f.apply(o,[c]):0;
        return (c)?map:set;
    };
    set(rr);
    rr.set=set;            
    rr.map=map;            
    return set;
})
(/type/)(Object)("prototype")("toString")("call")(/slice/)([8,-1])(
`abcd
efg`
        )(3)(4)("join")("")()(NaN)
    ;

