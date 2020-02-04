 (function(st){
    var rr={ff:[],a:[],i:0,args:[]};var back;var fs=[];var ret=1;
    rr=Object.assign(rr,st);
    var set=function(c){
//        console.log(rr.i++,":set",arguments);
//        console.log("typeof:",typeof c,c);
        (typeof c == "function")?
            ((back)?(function(){
              rr[back]=c;
              back=null;
            }()):(ret=c.apply(rr,[rr])))
              :0;
        (typeof c == "number")?
            (function(){
                "_"['repeat'](c)['split']('')['map'](function(){
                    rr.a.push(rr.a[rr.a.length-1])                                
                });
            }()):(
        (typeof c == "string")?
            (function(){
                rr[c]=0;
                back=c;
            }()):
        (typeof c == "object")?
            (function(){
                rr.a.push(c);
                ret=c;
            }())
            :0);

        return (c)?set:map;
    };
    var map=function(c){
//        console.log(rr.i++,":map",arguments);
//        console.log("map args:",rr.args);
        (typeof c == "function")?
            (c.apply(rr,[rr])):0;
        (typeof c == "string")?
            ((rr[c])?(function(){fs.push(rr[c])}()):0):0;
        (typeof c == "number")?
            (function(){
                "_"['repeat'](c)['split']('')['map'](function(cc,ii,aa){
                    fs.map(function(ccc,iii,aaa){ret = ccc.apply(rr,[ret,ii,rr])});
                });
                fs=[];
            })():0;
        (typeof c == "object")?
            (c['map'])?
            (function(){
                c['map'](function(cc,ii,aa){
                    fs.map(function(ccc,iii,aaa){
                        ret = ccc.apply(rr,[ret,cc,rr])
                    });
                });
            }()):((c['source'])?(
                (typeof rr[c['source']]=="function")?(
                    function(){
                        rr.args.push(rr[c['source']].apply(rr,[ret]));
//                    var cc = map(ret);
//                    console.log("rr.args",rr.args);
                        ret=c;
                    }()
                ):(ret = c)    
            ):0):0;

        return (c)?map:set;
    };
    return set;
})
({
    type:function(c){
        return []["slice"]["apply"](Object["prototype"]["toString"]["call"](c),[8,-1])["join"]("");
    },
    primez:[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
})
    ("gcd")(function(c,cc,rr){
        console.log(c);
        //gcd https://rosettacode.org/wiki/Greatest_common_divisor#JavaScript
        ret = (function gcd_rec(a, b) {
          return b ? gcd_rec(b, a % b) : Math.abs(a);
        }).apply(rr,c);
        console.log("ret",ret);
        return ret;
    })
    ([1071,1029])()
    ("gcd")(1)
    //("p")(1)
    ;


