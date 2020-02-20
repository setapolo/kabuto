  (function(rr){
    var s='';
    var a=[];
    var o={};
    var ret={};
    var f=null;
    var k=null;
    var is = function(c,flg){
            (flg)?(console.log(flg,c)):0;
            return function(sss,flg){
                var ss=Object.prototype.toString.call(c).slice(8, -1);
                (flg)?(console.log(flg,ss)):0;
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

    var i=0;
    [1,2,3].map(function(c,i,a){

    })
    var set=function(c){
        //console.log("welcome set",c);
        is(c)("Object")(function(c){ret = c});
        is(c)("String")(function(c){k = c});
        is(c)("Number")(function(c){ret[k] = c});
        is(ret);
        return (c!=null)?set:map;
    };
    var map=function(c){
        is(c,true)("Function")(function(c){c.apply(rr,[rr])});
        //console.log("welcome map",c);
        return (c!=null)?map:set;
    };
    set(rr);
    rr.set=set;            
    rr.map=map;
    rr.is=is;            
    return set;
})({})
("st")(43)
("ed")(14)()(function(rr){rr.is(rr["st"],true);
    var a="_"['repeat'](rr["ed"])['split']('')['map'](function(c,i,a){
        return "-i "+('0'+(i+rr["st"])).slice(-2)+".mp3";
    })
    rr.is(a.join(" "),"rd");
})

;

