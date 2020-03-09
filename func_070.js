
(function(g){//dragon plane
    var a=[];
    var is = function(c,flg){
            (flg)?(console.log(flg,c)):0;
            var ss=Object['prototype']['toString']['call'](c).slice(8, -1);

            var cmp=function(sss,flg){
                (flg)?(console.log(flg,ss)):0;
                var zz=Object['prototype']['toString']['call'](sss).slice(8, -1);
                var type=typeof sss;
                var b = (type=="boolean")?(c!=null):((type=="string")?(sss==ss):(c==sss));
                b=(typeof c=="boolean")?c:b;
                b=(zz=="Array")?((sss.reduce(
                    (function(base){
                        return function(pp,cc,ii,aa){
                            return (ii==1)?(((base==pp)?0:1)*((base==cc)?0:1)):((base==cc)?0:1)*pp};
                    }(c))))==0)?true:false:b;
                return function(f){
                    (b==true)?f.apply(c,[c,ss,sss]):0;
                    return function(ff){
                        (b==false)?((ff)?ff.apply(c,[c,ss,sss]):0):0;
                        return is(c);
                    };
                }
            }
            return cmp;
        };
    var f=function(c){
        a.push(c);
        is(c)(true)
        (function(c){
        })
        (function(c){
            console.log(a.join(" "));
        })
        return (c!=null)?f:f;
    }
    return f;
})(global)
    ("ls")("-al")()
    ("ls")("-a")()
    ("ls")("-at")()

;


