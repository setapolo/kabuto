 (function(rr){
    var l='';
    var s='';
    var a=[];
    var o={};
    var is = function(c){
            var ss=Object.prototype.toString.call(c).slice(8, -1)
            //console.log(typeof c,ss,(c)?true:false);
            return function(sss){
                var b = (sss==ss);
                return function(f){
                    return (b)?f.apply():0;
                }
            }
        };
    var set=function(c){
        is(c)("String")(function(){
            s=(s)?s:c;
            (o[s])?(o[s].push(c)):(o[s]=[]);
        });
        (o[s])?(o[s].push(c)):0;
        a.push(c);
        s=(c!=null)?s:'';
        return (c!=null)?set:map;
    };
    var map=function(c){
        is(c)("String")(function(){
            s=c;
        });
        is(c)("Function")(function(){
            var mat=(o[s])?o[s]:a;
            a=c.call(mat,mat)
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
    ("2")(`test`)("")//String
    (true)(false)//Boolean
    (function(){})(Date)//functions
    (/[a-z]/)([1,2,3])([])({})(new Date)()()
("array")
    (1)(1)(1)(1)(1)(1)(1)(1)(1)(1)()
("types")(console.log)
("array")(console.log)
    ();

