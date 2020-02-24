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
                    rr.iii=iii;
                    ff.map(function(cc,ii,aa){
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
(`
<!DOCTYPE html>
<html>
    <head>
        <title>HTML5サンプル1</title>
        <meta charset="UTF-8">
    </head>
    <body>
        <h1>HTML5サンプル1</h1>
        <p>段落</p>
    </body>
</html>
`)
("<p>")(".*")("</p>")
(function(rr){
    return function(){
        var ret=arguments[1]+rr.iii+arguments[3];
        return ret; 
    }
})()
(function(){//[head,st,ed,tail1,tail2,f]
        var r = new RegExp("("+arguments[1]+")"+"("+arguments[2]+")"+"("+arguments[3]+")","ig")
        ret = arguments[0]['replace'](r,arguments[arguments.length-1](this))
        this.is(ret,"ret: ");
})(2);

