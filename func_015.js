 (function(st){
    var rr={ff:[],a:[],i:0,args:[]};var back;var ret=null;
    rr=Object.assign(rr,st);
    var set=function(c){
        (typeof c == "function")?
            ((back)?(function(){
              rr[back]=c;
              back=null;
            }()):(ret=c.apply(rr,[ret,rr])))
        :0;
        (typeof c == "number")?
            (function(){
                "_"['repeat'](c)['split']('')['map'](function(){
                    rr.a.push(rr.a[rr.a.length-1]);                                
                });
                (ret)?(function(){
                    (ret['push'])?(ret.push(c)):0;
                    (typeof ret=="number")?(ret=[ret,c]):0;
                }())
                :(ret=c);
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
    var fs=[];
    var map=function(c){
        (typeof c == "function")?
            (c.apply(rr,[rr])):0;
        (typeof c == "string")?
            ((rr[c])?(function(){fs.push(rr[c])}()):0):0;
        (typeof c == "number")?
            (function(){
                "_"['repeat'](c)['split']('')['map'](function(cc,ii,aa){
                    fs.map(function(ccc,iii,aaa){
                        ret = ccc.apply(rr,[ret,ii,rr])
                    });
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
})
    ("p")(function(c,cc,rr){
        arp=[];
        var j=0;
        for (var i=0;i<100;i++){
            j=j+0.01;
            arp.push(j)
        }
        arp.map(function(p){
            var entropy = -p*Math.log2(p) - (1-p)*Math.log2(1-p)
            console.log("entropy",entropy);
        });
        console.log("p",c);
        return c;
    })
    (1)(2)(3)(4)(function(c){
        ret = (c['map'])?(c['map'](function(cc,ii,aa){return cc*2})):c;
        return ret;
    })()
    ("p")(1)
    //("p")(1)
    ;


