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
    var set=function(c){
        //console.log("welcome set",c);
        is(c)("String")(function(c){
            a.push(c);
        })
        is(c)("Number")(function(c){
            a.push(c);
        })
        return (c!=null)?set:map;
    };
    var map=function(c){
        is(c,false)("Function")(function(c){
            is(c.apply(rr,[rr]),true)
        });
        //console.log("welcome map",c);
        return (c!=null)?map:set;
    };
    set(rr);
    rr.set=set;            
    rr.map=map;
    rr.is=is;
    rr.a=a;
    return set;
})({})("0")(4)()(function(rr){
    //rr.is(rr,true);

    var rep = (function(s){
            return function(n){
                rr.is(s.repeat(n),true);
                return rep;
            }});
    rep("x")(3)("o")(16);

//    return (function(s,n){return s.repeat(n)}).apply(rr,rr.a);
});


;

