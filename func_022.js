 (function(rr){
    var l='';
    var s='';
    var a=[];
    var o={};
    var f=function(){};
    var set=function(c){
        ss= Object.prototype.toString.call(c).slice(8, -1);
        a.push(c);
        (ss=="String")?(function(c){o[c]=[];l=c})(c):0;
        (ss=="Number")?o[l].push(c):0;
        return (c!=null)?set:map;
    };
    var map=function(c){
        ss= Object.prototype.toString.call(c).slice(8, -1);
        (ss=="String")?s=o[c]:0;
        (ss=="Number")?o["type"].push(c):0;
//        "_"['repeat'](c)['split']('')['map'](function(){
//                    rr.a.push(rr.a[rr.a.length-1]);                                
//                })
        console.log(s);
        return (c!=null)?map:set;
    };
    set(rr);
    rr.set=set;            
    rr.map=map;            
    return set;
})
("type")
    (1)(2)(3)(4)()
("type")
    (10);

