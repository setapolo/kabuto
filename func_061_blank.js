
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
    global.iii=0;
    return set;
})({})
("BR","\n")
("TAB","\t")
("ret","")
("kvs",function(){
    return Object.keys(_meta).map(function(c,i,a){
        return [c,'"'+_meta[c]+'"'].join("=");
    })
})
("tag",function(){
    var tag_name=arguments[0];
    return function(){
        var parent=arguments[0];
        var head=arguments[1][1];
        var tail=arguments[1][2];
        ret+=TAB.repeat(iii);
        ret+=[head," ",tag_name," ",tail,"{"].join("");
        ret+=BR;
        var f=function(cc){
            var aa =[].slice.call(arguments); 
            is(cc)(true)
                (function(){})
                (function(){
                    ret+=TAB.repeat(iii);
                    ret+= "}";
                    ret+=BR;
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
("clas",tag("class"))
("main",tag("main"))
(function(){
    clas(null,[null,"public","HelloWorld"])(main,"public static void","(String[] args)")()();
    console.log(ret);
    return 0;
})
()
(`
public class HelloWorld{
   public static void main(String[] args){
     System.out.println("Hello World!!");
   }
}
`)
;



