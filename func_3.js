console.log(
    (function(rr){
        var s;
        var ss;
        var _a=[];
        rr['apply']=function(c,i,a){ss=(typeof c == "function")?(c['apply'](rr['a'],[i,ss])):(0);return ss}
        var f=function(c){
            (typeof c == "object")  ?(_a=[])  :(0);
            (typeof c == "string")  ?(s=c)    :(0);
            (typeof c == "function")?(rr[s]=c):(0);
            (typeof c == "number")  ?(function(){
                "_"['repeat'](c)['split']('')['map'](function(){
                    _a['map'](function(cc,i,a){rr['push'](rr[cc])});
                });
            })()                              :(0);
            (rr[c])?(function(){
                _a['push'](c)
            })()                              :(rr[c]=0);
            return (c)?(f):(rr);
        };
        return f;
    })
    ({
        a:[],
        push:function(c){this['a']['push'](c)},
        map:function(){this['a']=this['a']['map'](this['apply']);return this;}

    })
    ("log")(function(c,ss){console.log(Date.now(),"log",c);return c})
    ("rnd")(function(c){return Math.random(c)})
    ("x10")(function(c,ss){return ss*10})
    ("round")(function(c,ss){return Math.round(ss)})
    ({})(/log/)("log")("log")(1)
    ({})("log")(/log/)(1)
    ({})("rnd")("x10")("round")(3)
    ({})("rnd")("x10")("round")(3)
    ({})("rnd")("x10")("round")(3)
    ("log")(1)
    (true)().map()
)