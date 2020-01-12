(function(st){
    var rr={ff:[],a:[],i:0};var back;var func;
    var set=function(c){console.log(rr.i++,":set",arguments);
        (typeof c == "function")?
            (rr[back]=c):0;
        (typeof c == "number")?
            (function(){
                "_"['repeat'](c)['split']('')['map'](function(){
                    rr.a.push(rr.a[rr.a.length-1])                                
                });
            })():(
        (typeof c == "string")?
            (function(){
                rr[c]=0;
                back=c;
            }()):(c)?
            (rr.a.push(c)):0);
        return (c)?set:map;
    };
    var map=function(c){console.log(rr.i++,":map",arguments);
/*
        //rr.ff[rr.ff.length-1].apply(rr,arguments);
        (c)?
            ((c['map'])?
                (c['map'](rr.ff[0])):0):0;        
*/
        (typeof c == "function")?
            (c.apply(rr,[rr])):0;

        (typeof c == "string")?
            ((rr[c])?(function(){func=rr[c]}()):0):0;

        (typeof c == "number")?
            (function(){
                "_"['repeat'](c)['split']('')['map'](function(cc,ii,aa){
                    func.apply(rr,[ii]);                                
                });
            })():0;

        return (c)?map:set;
    };
    return set;
})({})
    ("abc")(function(c,rr){
        console.log("function#1",c);
        return c*2;
    })
    ("efg")(function(c,rr){
        console.log("function#2",c,this);
        return c*3;
    })
    ([1,2,3,4])(8)
    ()
    ("abc")("abc")("efg")("abc")(function(c){
        console.log("function#3",c);
        return c*2;
    })(10);
