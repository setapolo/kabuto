(function(st){
    var rr={ff:[],a:[],i:0};var back;var fs=[];var ret=1;
    var set=function(c){console.log(rr.i++,":set",arguments);
        (typeof c == "function")?
            (rr[back]=c):0;
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
        (c)?
            (rr.a.push(c)):0);
        return (c)?set:map;
    };
    var map=function(c){console.log(rr.i++,":map",arguments);
        (typeof c == "function")?
            (c.apply(rr,[rr])):0;
        (typeof c == "string")?
            ((rr[c])?(function(){fs.push(rr[c])}()):0):0;
        (typeof c == "number")?
            (function(){
                "_"['repeat'](c)['split']('')['map'](function(cc,ii,aa){
                    fs.map(function(ccc,iii,aaa){ret = ccc.apply(rr,[ret,ii])});
                });
                fs=[];
            })():0;
        (typeof c == "object")?
            (c['map'])?
            (function(){
                c['map'](function(cc,ii,aa){
                    fs.map(function(ccc,iii,aaa){
                        ret = ccc.apply(rr,[ret,cc])
                    });
                });
            }()):((c['source'])?(
                function(){
                    ret = rr[c['source']].apply(rr,[ret]);
                    var cc = map(ret);
                }()
            ):0):0;

        return (c)?map:set;
    };
    return set;
})({})
    ("x2")(function(c,rr){return c*2;})
    ("x4")(function(c,rr){return c*4;})
    ("join")(function(c,rr){console.log("join::",c)
        return (c['join'])?(c.join("")):(c);
    })
    ("p")(function(c,rr){
        console.log("function#3",c);
        return c;
    })
    ("alphabet")(function(){
        return "_".repeat(26).split('').map(function(c,i,a){
            return String.fromCharCode(i+"a".charCodeAt(0));
        });
    })
    ([1,2,3,4])(8)()
    (/alphabet/)("join")("join")("join")("p")(1);
