
(function(rr){
    var N="Number",S="String",F="Function",O="Object";
    var a=[];
    var oo;
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
("ret","")
("_meta",{"charset":"UTF-8"})
("kvs",function(){
    return Object.keys(_meta).map(function(c,i,a){
        return [c,'"'+_meta[c]+'"'].join("=");
    })
})
("html",function(){
    console.log("a",arguments);
    ret="<!DOCTYPE html>";
    ret+=BR;
    ret+="<html>";
    ret+=BR;
    var f=function(c){
        console.log("a-2",arguments);
        (c!=null)?0:(ret+= "</html>");
        is(c)("Function")(function(){
            cc=c.apply(this,[f]);
        });
        is(ret,"ret");
        return (c!=null)?cc:f;
    };
    return f;
})
("head",function(c){
    console.log("b",arguments);
    ret+="<head>";
    ret+=BR;
    var f = function(cc){
        console.log("c",arguments);
        (cc!=null)?0:(ret+= "</head>");
        is(cc)("Function")(function(){
            ccc=cc.apply(this,[f]);
        });
        is(ret,"ret2");
        return (cc!=null)?f:c;
    }
    return f;
})
("body",function(c){
    console.log("b",arguments);
    ret+="<body>";
    ret+=BR;
    var f = function(cc){
        console.log("c",arguments);
        (cc!=null)?0:(ret+= "</body>");
        is(cc)("Function")(function(){
            ccc=cc.apply(this,[f]);
        });
        is(ret,"ret2");
        return (cc!=null)?f:c;
    }
    return f;
})
("title",function(){
    ret+="<title>";
    ret+="</title>";
    ret+=BR;
    return "<head>";
})
("meta",function(){
    ret+="<meta>";
    ret+=BR;
    return "<head>";
})
("h1",function(){
    ret+="<h1></h1>";
    ret+=BR;
    return "</h1>";
})
("p",function(){
    ret+="<p></p>";
    ret+=BR;
    return "</p>";
})
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



