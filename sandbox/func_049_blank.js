(function(rr){
    var N="Number",S="String",F="Function";
    var a=[];
    var ff=[];
    var is = function(c,flg){
            (flg)?(console.log(flg,c)):0;
            return function(sss,flg){
                var ss=Object.prototype.toString.call(c).slice(8, -1);
                (flg)?(console.log(flg,ss)):0;
                var type=typeof sss;
                var b = (type=="boolean")?(c!=null):((type=="string")?(sss==ss):(typeof c==type));
                b=(typeof c=="boolean")?c:b;
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
        is(c)(N)(function(c){a.push(c)});
        is(c)(S)(function(c){a.push(c)});
        is(c)(F)(function(c){a.push(c)});
        return (c!=null)?set:map;
    };
    var map=function(c){
        is(c)(N)(function(c){
            var aaa="_"['repeat'](c)['split']('')['map'](
                function(ccc,iii,aaa){
                    ff.map(function(cc,ii,aa){
                        a[1]=(this[1]*a[2])+1;
                        cc.apply(rr,a)
                    },arguments);
                });
        });
        is(c)(F)(function(c){
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
("fmpeg")(1)(14)("-filter_complex")("concat=n=2:v=0:a=1")
(function(){//map callback:[c,i,a] 
            return ["-i ",(arguments[1]+this[1]),".mp3"].join("");
})()
(function(){//[head,st,ed,tail1,tail2,f]
        var a="_"['repeat'](arguments[2])['split']('')['map'](arguments[arguments.length-1],arguments);
        a.unshift(arguments[0]);
        a.push(arguments[3]);
        a.push(arguments[4]);
        this.is(a.join(" ")," ");
})(8);

