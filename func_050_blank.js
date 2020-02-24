  (function(rr){
    var s='';
    var a=[];
    var o={};
    var ret={};
    var f=null;
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
    var set=function(c){
        is(c)("String")(function(c){
            a.push(c);
        })
        is(c)("Number")(function(c){
            a.push(c);
        })
        return (c!=null)?set:map;
    };
    var map=function(c){
        is(c,false)("Function")(function(c){
            is(c.apply(rr,[rr]),true)
        });
        return (c!=null)?map:set;
    };
    set(rr);
    rr.set=set;            
    rr.map=map;
    rr.is=is;
    rr.a=a;
    return set;
})({})("0")(4)()(function(rr){
    var a=[];
    var has = function(o,flg){
        (flg)?(console.log(flg,o)):0;
        return function(m,flg){
            (flg)?(console.log(flg,m)):0;
            return function(f,flg){
                (flg)?(console.log(flg,f)):0;
                return o[m](f(m));
            };            
        }
    }
    var split=function(name){
        return function(c,i,a){
            console.log("map",c);
            return c.split("\n");
        };
    }
    var html = function(a){
        rr.is(has(a)("map")(split),true);
        return function(c,flg){
            return a;
        }
    };
rr.is(
    (function(ff){ 
        var ret="";
          var x= function(c){
             rr.is(c)("String")
                (function(c){
                    a.push(c)
                });
             return (c)?x:html(a);
         };
         return x;
    })
(html)
(
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
    </body>
</html>
`
)()
    ,true);
});

//console.log("concat=n=2:v=0:a=1".match(/(concat=n=)([0-9])(:v=0:a=1)/))
 console.log("whole:","concat=n=2:v=0:a=1".replace(/concat=n=2:v=0:a=1/,function(){console.log("a1",arguments)}))
 console.log("whole:","concat=n=2:v=0:a=1".replace(/(concat)(=n=2)(:v=0:a=1)/,function(){console.log("a2",arguments)}))
 console.log("whole:","concat=n=2:v=0:a=1".replace(/([c][o][n]cat)(=n=2)(:v=0:a=1)/,function(){console.log("a3",arguments)}))
 console.log("whole:","concat=n=2:v=0:a=1".replace(/([c][a][n]cat)(=n=2)(:v=0:a=1)/,function(){console.log("a4",arguments)}))
 console.log("whole:","concat=n=2:v=0:a=1".replace(/([c][o][n]cat)/,function(){console.log("a5",arguments)}))
 console.log("whole6:","concat=n=2:v=0:a=1".replace(/([c][o][n]cat)/,"$1 xxxx"))
 console.log("whole:","concat=n=2:v=0:a=1".replace(/([c][o][n]cat).*(:v=0:a=1)/,function(){console.log("a6",arguments)}))


