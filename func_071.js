(function(g,flg){
    (flg)?(console.log(flg,arguments)):0;
    g.command_line=function(bootstrap,flg){
        (flg)?(console.log(flg,arguments)):0;
        g.a=[];
        var f = function(c,flg){
            (flg)?(console.log(flg,arguments)):0;
            a.push(c);
            return (c!=null)?f:bootstrap(c);
        }
        return f;
    };
    var a=[];
    g.is = function(c,flg){
            (flg)?(console.log(flg,arguments)):0;
            var ss=Object['prototype']['toString']['call'](c).slice(8, -1);
            var cmp=function(sss,flg){
                (flg)?(console.log(flg,arguments)):0;
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
    var voi = function(){};    
    var bootstrap=function(c){
        (flg)?(console.log(flg,arguments)):0;
        var ret=bootstrap;
        is(c)("Function")(function(cc){
                    ret=cc(bootstrap);
                    g.back=ret;

                })(voi)
            (true)(voi)
                (function(cc){
                    ret=g.back;
                })
        console.log("b",a)
        return ret;
    };
    return bootstrap;
})(global)
    (command_line)
        ("ls")("-al")()
        ("ls")("-a")()
        ("ls")("-at")()
;
console.log(process.argv);

