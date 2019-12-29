console.log(
    (function(rr){
        var s;
        var ss;
        var _a=[];
        rr['a']=[];
        rr['push']=function(c){this['a']['push'](c)};
        rr['apply']=function(c,i,a){ss=(typeof c == "function")?c['apply'](rr['a'],[i,ss]):0;return ss}
        var f=function(c){
            (typeof c == "object")?_a=[]:0;
            (typeof c == "string")?s=c:0;
            (typeof c == "function")?rr[s]=c:0;
            (typeof c == "number")?"_".repeat(c).split("_").map(function(){
                //rr['push'](rr[s]);
                _a.map(function(cc,i,a){
                    console.log("ccccc",cc);
                    rr['push'](rr[cc])});
            }):0;
            (rr[c])?rr['push'](rr[c]):(rr[c]=0);
            (rr[c])?_a['push'](c):(rr[c]=0);
            return (c)?f:rr;
        }
        return f;
    })
    ({})
        ("map")(function(){this['a']=this['a']['map'](this['apply']);return this;})
        ("log")(function(c,ss){console.log(c);return c})
        ("rnd")(function(c){return Math.random(c)})
        ("x10")(function(c,ss){return ss*10})
        ("round")(function(c,ss){return Math.round(ss)})
    (/log/)("log")("log")
    ("log")(/log/)
        ({})("rnd")("x10")("round")(2)
        ({})("rnd")("x10")("round")(2)
        ({})("rnd")("x10")("round")(2)
    ("log")
    (true)().map()
)