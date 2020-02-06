  (function(rr){
    var s='';
    var a=[];
    var o={};
    var ret={};
    var f=null;
    var k=null;
    var is = function(c){
            return function(sss){
                var ss=Object.prototype.toString.call(c).slice(8, -1);
                var type=typeof sss;
                var b = (type=="boolean")?(c!=null):((type=="string")?(sss==ss):(typeof c==type));
                b=(typeof c=="boolean")?c:b;
                //console.log(c,"_is_",typeof c,ss,"_compareto_",sss,b);
                return function(f){
                    (b==true)?f.apply(c,[c,ss,sss]):0;
                    return function(ff){
                        (b==false)?((ff)?ff.apply(c,[c,ss,sss]):0):0;
                        return is(c);
                    };
                }
            }
        };
    var set=function(c){
        console.log("welcome set",c);
        is(c)("Function")(function(){
            c.apply(rr,[rr])
        })
        return (c!=null)?set:map;
    };
    var map=function(c){
        console.log("welcome map",c);
        return (c!=null)?map:set;
    };
    set(rr);
    rr.set=set;            
    rr.map=map;            
    return set;
})({a:"1"})(function(rr){
    var f=rr.set;
    ["k1","v1","k2","v2"]['map'](function(c,i,a){
                    f = rr.set.apply(rr,[c]);
    });
    ["k","v","k","v"]['map'](function(c,i,a){
                    f = rr.map.apply(rr,[c]);
    });
    console.log(rr);
})
;

