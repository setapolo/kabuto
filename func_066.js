
html=(function(a){//dragon plane
    var a =[].slice.call(arguments); 
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
    var tag=[];    
    var f=function(aa){
        var aa =[].slice.call(arguments); 
        is(aa[0])(true)
        (function(){
            tag.push(aa[0]);
        })
        (function(){
            a=[tag,a];
            tag=[];
        });
        console.log(a,aa);
        return f;
    }
    return f;
})({})//body plane
;
html("head")()
("title")("meta")()
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
//[html,section,[title,meta]]

