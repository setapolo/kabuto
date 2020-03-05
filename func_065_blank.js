
(function(rr){//dragon plane
    var N="Number",S="String",F="Function",O="Object";
    var a=[];
    var ff=[];
    var is = function(c,flg){
            (flg)?(console.log(flg,c)):0;
            var ss=Object['prototype']['toString']['call'](c).slice(8, -1);
            return function(sss,flg){
                (flg)?(console.log(flg,ss)):0;
                var type=typeof sss;
                var b = (type=="boolean")?(c!=null):((type=="string")?(sss==ss):(c==sss));
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
        is(c)(S)(function(c){
            global[c]=o;
        });
        is(c)(F)(function(){
            ff.push(c);
        })
        return (c!=null)?set:map;
    };
    var map=function(c){
        is(c)(S)(function(){
            a.push(c);
        });
        is(c)(N)(function(c){
              ff.map(function(cc,ii,aa){
                    ret=cc.apply(rr,a);
              })
        });
        is(c)(F)(function(c){
            a.push(c);
        });
        return (c!=null)?map:set;
    };
    set(rr);
    global.is=is;            
    global.iii=0;
    return set;
})({})//body plane
("BR","\n")
("TAB","\t")
("ret","")
("conc",function(s){
    return function(){
        var v=arguments[0];
        global[s] += (v)?v:"";
        return conc(s);
    }
})
("set_func",function(f){
    var a =[].slice.call(arguments); 
    var ff= function(c){
        var aa =[].slice.call(arguments); 
        a.push(f.apply(a,aa));
        return ff;
    }
    return ff;
})
("pls",function(){
    var a =[].slice.call(this); 
    var aa =[].slice.call(arguments); 
    console.log(a);
    return a[1]+aa[0]+a[2];
})
("conc3",set_func(pls,"<",">"))
("tag",function(){
    var tag_name=arguments[0];
    var type=(arguments[1])?arguments[1]:0;
    return function(){
        var parent=arguments[0];
        var content = (arguments[1])?(arguments[1][1])?(arguments[1][1]):0:0;
        conc("ret")(TAB.repeat(iii));
        is(type)(0)
            (function(){
                conc("ret")("<")(tag_name)(">");
            })
        is(type)(2)
            (function(){
                conc("ret")("<")(tag_name)(">");
                is(content)(true)(function(){
                    conc("ret")(arguments[0]);
                })
                conc("ret")("</")(tag_name)(">");
            });
        is(type)(3)
            (function(){
                conc("ret")("<meta ")(kvs(_meta))(">");
            });
        conc("ret")(BR);

        var f=function(){
            var cc = arguments[0];
            var aa =[].slice.call(arguments); 
            is(cc)(true)  
                (function(){})
                (function(){
                    conc("ret")(TAB.repeat(iii));
                    conc("ret")("</")(tag_name)(">");
                    conc("ret")(BR)
                });
            is(cc)("Function")(function(){
                iii++;
                ccc=cc.apply(this,[f,aa]);
            });
            var tr=ccc;
            var fl=0;
            is(parent)(true)(function(){
                iii--;
                tr=f;
                fl=parent;
            })
            return (cc!=null)?tr:fl;
        };
        return f;
    }
})
("_meta",{"charset":"UTF-8"})
("kvs",function(){//0:{"charset":"UTF-8"}
    var kv=arguments[0];
    return Object.keys(kv).map(function(c,i,a){
        return [c,'"'+_meta[c]+'"'].join("=");
    })
})
("conc2",set_func(pls,"<",">"))
("html",tag("html"))
("head",tag("head"))
("body",tag("body"))
("meta",tag("meta",3))
("title",tag("title",2))
("h1",tag("h1",2))
("p",tag("p",2))
(function(){
    var _t=arguments[0]
    var _h=arguments[1]
    var _f=arguments[2]
    html()
    (head)(title,_t)(meta)()
        (body)
            (h1,_h)
            (p,_f())
            (p,_f())
            (p,_f())
        ()
    ();
    console.log(ret);
    return 0;
})
()//tail plane
("HTML5 sample3")("title2")(function(){
    conc2(1)(2)(3)(4);
    conc2(5)(6)(7);
    conc3(8)(9)(10);
    var i=0;
    return function(){
        i++;
        return "段落"+i;
    }

}())
(1)
;

`
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
`



