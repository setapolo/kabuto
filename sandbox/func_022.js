 (function(rr){
    var l='';
    var s='';
    var a=[];
    var o={};
    var f=function(){};
    var set=function(c){
        ss= Object.prototype.toString.call(c).slice(8, -1);
        (ss=="String")?(function(c){o[c]=[];l=c})(c):0;
        (ss=="Number")?o[l].push(c):0;
        console.log(a);

        return (c!=null)?set:map;
    };
    var map=function(c){
        ss= Object.prototype.toString.call(c).slice(8, -1);
        (ss=="String")?s=o[c]:0;
        (ss=="Number")?(function(c){s="_"['repeat'](c)['split']('')['map'](function(cc,ii,aa){return s})})(c):0;
        (ss=="Function")?s=c.call(a,arguments[1]):0;
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
    (1)(5)()();//([].join,["\n"]);

