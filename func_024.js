 (function(rr){
    var l='';
    var s='';
    var a=[];
    var o={};
    _ = function(c){
            return function(sss){
                var b = (sss==Object.prototype.toString.call(c).slice(8, -1));
                return function(f){
                    return (b)?f.apply():0;
                }
            }
        };
    var set=function(c){
        _(c)("String")(function(){
            console.log(1);
        });
        a.push(c);
        //console.log(typeof c,ss,(c)?true:false);
        return (c!=null)?set:map;
    };
    var map=function(c){
        _(c)("Function")(function(){
            a=c.call(a,a)
        });
        return (c!=null)?map:set;
    };
    set(rr);
    rr.set=set;            
    rr.map=map;            
    return set;
})
("types")
    (1)(0)(NaN)//Number
    ("2")(`test`)("")
    (true)(false)
    (function(){})(Date)
    (/[a-z]/)([1,2,3])([])({})(new Date)()
("types")(function(a){return a})(console.log)
    ();

