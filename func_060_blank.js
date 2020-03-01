
(function(rr){
    var N="Number",S="String",F="Function",O="Object";
    var a=[];
    var is = function(c,flg){
            (flg)?(console.log(flg,c)):0;
            var ss=Object['prototype']['toString']['call'](c).slice(8, -1);
            return function(sss,flg){
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
    var set=function(c,o){
        is(c)(S,"")(function(c){
            global[c]=o;
            a.push(c);
        });
        is(c)(F)(function(){
            a=c.apply(rr,a);
        })
        return (c!=null)?set:map;
    };
    var map=function(c){
        is(c)(N)(function(c){a.push(c)});
        is(c)(F)(function(c){
                        a=c.apply(rr,a);
        });
        return (c!=null)?map:set;
    };
    set(rr);
    rr.set=set;             
    rr.map=map;
    rr.is=is;            
    global.is=is;            
    return set;
})({})
("BR","\n")
("TAB","\t")
("ret","")
("_meta",{"charset":"UTF-8"})
("kvs",function(){
    return Object.keys(_meta).map(function(c,i,a){
        return [c,'"'+_meta[c]+'"'].join("=");
    })
})
("tag",function(){
    var tag_name=arguments[0];
    var level=arguments[1];
    return function(){
        ret+=TAB.repeat(level);
        ret+=["<",tag_name,">"].join("");
        ret+=BR;
        var f=function(c){
            is(c)(true)
                (function(){})
                (function(){
                    ret+=TAB.repeat(level);
                    ret+= "</"+tag_name+">";
                    ret+=BR;
                });
            is(c)("Function")(function(){
                cc=c.apply(this,[f]);
            });
            console.log(ret);
            return (c!=null)?cc:f;
        };
        return f;
    }
})
("tag2",function(){
    var tag_name=arguments[0];
    var level=arguments[1];
    return function(c){
    ret+=TAB.repeat(level);
    ret+=["<",tag_name,">"].join("");
    ret+=BR;
    var f = function(cc){
        is(cc)(true)
            (function(){})
            (function(){
                ret+=TAB.repeat(level);
                ret+= "</"+tag_name+">";
                ret+=BR;
            })
        is(cc)("Function")(function(){
            ccc=cc.apply(this,[f]);
        });
        return (cc!=null)?f:c;
    }
    return f;
}})
("tag3",function(){
    var tag_name=arguments[0];
    var level=arguments[1];
    return function(){
    ret+=TAB.repeat(2);
    ret+=["<",tag_name,">"].join("");
    ret+="HTML5サンプル1";
    ret+= "</"+tag_name+">";
    ret+=BR;
    return "<head>";
}})
("html",tag("html"))
("head",tag2("head",1))
("body",tag2("body",1))
("title",tag3("title",2))
("meta",function(){
    ret+=TAB.repeat(2);
    ret+="<meta "+kvs(_meta)+">";
    ret+=BR;
    return "<head>";
})
("h1",tag3("h1",3))
("p",tag3("p",3))
(function(){
    html()(head)(title)(meta)()
        (body)(h1)(p)(p)
        ()();
    return 0;
})
()
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
        aaaaaa
        <p>段落</p>
    </body>
</html>
`)
;



