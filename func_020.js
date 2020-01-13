 (function(rr){
//    var st={ff:[],a:[],i:0,args:[]};var back;var ret=null;
    var s='';
    var a=[];
    var set=function(c){
        s = (typeof c).split('')[0];
        a.push(s);
        console.log("a",a);
        console.log("o",c);
//        console.log("aa",aa);
        //({})(:uni)(type)(split)(end)(push)(type)(merge)(p)
        // (typeof c == "function")?
        //     ((back)?(function(){
        //       rr[back]=c;
        //       back=null;
        //     }()):(ret=c.apply(rr,[ret,rr]))):0;
        // (typeof c == "number")?
        //     (function(){
        //         "_"['repeat'](c)['split']('')['map'](function(){
        //             rr.a.push(rr.a[rr.a.length-1]);                                
        //         });
        //         (ret)?(function(){
        //             (ret['push'])?(ret.push(c)):0;
        //             (typeof ret=="number")?(ret=[ret,c]):0;
        //         }())
        //         :(ret=c);
        //     }()):(
        // (typeof c == "string")?
        //     (function(){
        //         rr[c]=0;
        //         (back)?(ret=[back,c]):back=c;
        //         console.log("string",back,c,ret);
        //     }()):
        (typeof c == "object")?
             (function(){
                rr=Object.assign(c,rr);
//                   console.log("set_o",rr);
//                 rr.a.push(c);
//                 ret = Object.assign(c,ret);
             }())
         :0;
        return (c)?set:map;
    };
    var map=function(c){console.log("map",rr.iii);
        // console.log("xxxx",c);
        // console.log("xxxx",typeof c);
        // (typeof ret == "function")?(ret = ret.apply(rr,[1,rr])):0;
        // console.log("retxxx",typeof ret);

        // (typeof c == "function")?
        //     (c.apply(rr,[rr])):0;
        // (typeof c == "string")?
        //     ((rr[c])?(function(){fs.push(rr[c])}()):0):0;
        // (typeof c == "number")?
        //     (function(){
        //         "_"['repeat'](c)['split']('')['map'](function(cc,ii,aa){
        //             fs.map(function(ccc,iii,aaa){
        //                 ret = ccc.apply(rr,[ret,rr]);
        //                 console.log("ret",ret);
        //             });
        //         });
        //         fs=[];
        //     })():0;
        // (typeof c == "object")?
        //     (ret=c):0;

        return (c)?map:set;
    };
    set(rr);
    rr.set=set;            
    rr.map=map;            
    return set;
})
(":uni")
    ("p")(function(c,rr){//pushIn Experimental
        //rr.pIn(c);
        console.log("rr",rr);
        return c;
    })
    ("eq")(function(e){
                console.log("eq1");
        return function(q){
                console.log("eq2");
            return function(f){
                console.log("eq3");
                return f(e===q);
            }
        }})
    (["hello","t"])("abc")(["World"])(true)(1)(2)(3)
    ()("p")(1)
    ;

// (function(e){//eq
//         var a=[e];    
//         console.log("eq1");
//         return function(q){
//             a.push(q);
//             console.log("eq2");
//             var f= function(ff){
//                 console.log("eq3");
//                 (typeof ff == "function")?ff.apply(a,[(e===q)]):(a.push(q));
//                 return f;
//             };
//             return f;
//         }})(1)(1)(1)(1)(1)(function(c){console.log(c,this);return c;});
