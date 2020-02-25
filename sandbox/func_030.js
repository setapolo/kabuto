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
//        is(c)({}) (function(){console.log("some")})(function(){console.log("nan")});
        is(c)({})(function(){
          is(Object.keys(c).length==0)(true)
                (function(){ret={};})(function(){Object.assign(ret,c)});
          console.log(Object.keys(c).length==0);
//          is(ret)(false)(function(){console.log("some")})(function(){console.log("nan")});
        })()("String")(function(){
          is(k)(true)(function(){ret[k]=c;k=null})
                     (function(){k=c});
          //console.log(ret);
        })
        return (c!=null)?set:map;
    };
    var map=function(c){
        console.log(ret);
        return (c!=null)?map:set;
    };
    set(rr);
    rr.set=set;            
    rr.map=map;            
    return set;
})({})({a:1})({b:1})({c:1,a:2})({c:1,a:3})()([console.log])
;

console.log(/.*/);