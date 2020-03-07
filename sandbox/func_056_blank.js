
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
("BR","\n")
("map",function(c,i,a){
    return i+c;
})
(function(){
    var a = [].slice.call(arguments); 
    var c =a[0].split(BR);
    a.unshift(c);
    return a;
})
(function(){
    var a = [].slice.call(arguments); 
    var c = a[0].map(map);
    a.unshift(c);
    return a;
})
(function(){
    var a = [].slice.call(arguments); 
    is(a,"::");
    return a;
})
()
;



