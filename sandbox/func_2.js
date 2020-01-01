console.log(
    (function(rr){
        var s;
        rr['a']=[];
        rr['push']=function(c){this['a']['push'](c)};
        var f=function(c){
            console.log(typeof c);
            (typeof c == "string")?s=c:0;
            (typeof c == "function")?rr[s]=c:0;
            (typeof c == "number")?"_".repeat(c).split("_").map(function(){rr['push'](rr[s])}):0;
            (rr[c])?rr['push'](rr[c]):(rr[c]=0);
            return (c)?f:rr;
        }
        return f;
    })
    ({})
    ("map")(function(){this['a']=this['a']['map'](this['apply']);return this;})
    ("apply")(function(c,i,a){return (typeof c == "function")?c['apply'](this['a'],[i]):0})
    ("log")(function(c){console.log(c);return c})
    ("rnd")(function(c){console.log(Math.round(Math.random(0)*10));return c})
    (/log/)("log")("log")
    ("log")(/log/)({})(8)
    ("rnd")(true)().map()
)