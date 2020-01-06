 (function(rr){
    var st={ff:[],a:[],i:0,args:[]};var back;var ret=null;
    rr=Object.assign(rr,st);
    var set=function(c){console.log("set",rr.iii);
        (typeof c == "function")?
            ((back)?(function(){
              rr[back]=c;
              back=null;
            }()):(ret=c.apply(rr,[ret,rr]))):0;
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
//                console.log("string",c);
                rr[c]=0;
                (back)?(ret=[back,c]):back=c;
                console.log("string",back,c,ret);
                
            }()):
        (typeof c == "object")?
            (function(){
                rr.a.push(c);
                ret = Object.assign(c,ret);
//                ret=c;
            }())
        :0);
        return (c)?set:map;
    };
    var fs=[];
    var map=function(c){console.log("map",rr.iii);
        (typeof c == "function")?
            (c.apply(rr,[rr])):0;
        (typeof c == "string")?
            ((rr[c])?(function(){fs.push(rr[c])}()):0):0;
        (typeof c == "number")?
            (function(){
                "_"['repeat'](c)['split']('')['map'](function(cc,ii,aa){
                    fs.map(function(ccc,iii,aaa){
                        ret = ccc.apply(rr,[ret,rr])
                    });
                });
                fs=[];
            })():0;
        (typeof c == "object")?
            (ret=c):0;

        return (c)?map:set;
    };
    rr.set=set;            
    rr.map=map;            
    return set;
})
({
    type:function(c){
        return []["slice"]["apply"](Object["prototype"]["toString"]["call"](c),[8,-1])["join"]("");
    },
})
    ("p")(function(c,cc,rr){
        console.log("p",c);
        c = Object.assign(c,"goho");
        return c;
    })
    ("hello")(",")("World")()
    ("p")(1)()
    //("p")(1)
    ;


