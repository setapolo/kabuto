
html=(function(a){//dragon plane
    var a =[].slice.call(arguments); 
    var is = function(c,flg){
            (flg)?(console.log(flg,c)):0;
            var ss=Object['prototype']['toString']['call'](c).slice(8, -1);
            return function(sss,flg){
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
        };
    var tag=[];    
    var goo=[];    
    var f=function(aa){
        var aa =[].slice.call(arguments); 
        is(aa[0])(true)
            (function(){
                is(aa[0])(["head","body"])
                    (function(c){
                        goo.push("/"+c);
                    });
                is(aa[0])("String")(function(){
                    tag.push(aa[0]);
                })       
            })
            (function(){
                var s = goo.pop();
                a=[a.join(" "),tag.join(" "),s];
                tag=[];
            });
        console.log("log:",a,aa,goo);
        return f;
    }
    return f;
})({})//body plane
;
html("head")("title")("meta")()
        ("body")
            ("h1")
            ("p")
            ("p")
            ("p")
        ()
    ();
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


