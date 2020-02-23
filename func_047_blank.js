(function(rr){
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
        is(c)("Number")(function(c){a.push(c)});
        is(c)("String")(function(c){a.push(c)});
        is(c)("Function")(function(c){a.push(c)});
        return (c!=null)?set:map;
    };
    var map=function(c){
        is(c)("RegExp")(function(c){
            c=c.toString().replace(/\//ig,"");
            ff.push(rr[c]);
        });
        is(c)("Number")(function(c){
            a.push(ff.pop())
            var aaa="_"['repeat'](c)['split']('')['map'](
                function(ccc,iii,aaa){
                    ff.map(function(cc,ii,aa){
                        a[1]=(iii*14)+1;
                        cc.apply(rr,a)
                    });
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
    rr.rep=(function(head,st,ed,tail,f){
        var a="_"['repeat'](ed)['split']('')['map'](f,arguments);
        a.unshift(head);
        a.push(tail);
        this.is(a.join(" ")," ");

    });
    rr.p=(function(c,i,a){
  //          return "-i "+('0'+(i+this[1])).slice(-2)+".mp3";
            return "-i "+(i+this[1])+".mp3";
    });
    return set;
})({})
("fmpeg")(1)(14)(`-filter_complex “concat=n=2:v=0:a=1”`)()
(/rep/)(/p/)(8);

