  (function(rr){
    var s='';
    var a=[];
    var o={};
    var ret={};
    var ff=[];
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
    var set=function(c){
        is(c)("Number")(function(c){a.push(c)});
        return (c!=null)?set:map;
    };
    var map=function(c){
        is(c)("Number")(function(c){
            a.push(ff.pop())
            ff.map(function(cc,ii,aa){
                cc.apply(rr,a)
            });
        });
        is(c)("Function")(function(c){
            ff.push(c);
        });
        return (c!=null)?map:set;
    };
    set(rr);
    rr.set=set;            
    rr.map=map;
    rr.is=is;            
    return set;
})({})
(1)(14)()
(function(st,ed,f){
    var a="_"['repeat'](ed)['split']('')['map'](f);
    this.is(a.join(" "),"rd");
})
(function(c,i,a){
        return "-i "+('0'+(i)).slice(-2)+".mp3";
})
(function(c,i,a){
        return i;
})
(0);

