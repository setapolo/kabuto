 (function(rr){
    var l='';
    var s='';
    var a=[];
    var o={};
    var ret={};
    var f=null;
    var is = function(c){
            var ss=Object.prototype.toString.call(c).slice(8, -1)
//            console.log(typeof c,ss,(c)?true:false);
            return function(sss){
                var b = (sss==ss);
                return function(f){
                    (b==true)?f.apply():0;
                    return function(ff){
                        (b==false)?((ff)?ff.apply():0):0;
                        return is(c);
                    };
                }
            }
        };
    var set=function(c){
        is(c)("String")(function(){
            s=(s)?s:c;
            (o[s])?(o[s].push(c)):(o[s]=[]);
        })(function(){
            console.log("context",(s)?true:false);
            (s)?true:(is(c)("Function")(function(){
                f=c;
            }));
            console.log(f);
            (c!=null)?((o[s])?(o[s].push(c)):0):0;
            a.push(c);
        });
        s=(c!=null)?s:'';
        return (c!=null)?set:map;
    };
    var map=function(c){
        is(c)
        ("String")(function(){
            (s)?map(o[c]):s=c;
        })()
        ("Function")(function(){
            is(o[s])("Array")(
                function(){
                   o[s] = o[s].map(c); 
                }
            )(function(){
                var mat=(o[s])?o[s]:a;
                ret=c.call(mat,mat)

            });
        })()
        ("Array")(function(){
            c.map(function(cc,ii,aa){
                is(cc)("Function")(function(){
                    cc.apply(o[s],[o[s]]);
                })
            })
        })()
       ;
        s=(c!=null)?s:'';
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
    (1)(1)(1)(1)(1)(1)(1)(1)(1)(1)()()
(function(c,i,a){console.log("double");return c*2})("double")
()

("types")([console.log])
("array")("double")([console.log])
//("types")(function(c,i,a){return [i,typeof c,c]})([console.log])
//("array")(function(c,i,a){return c*2})(function(c,i,a){return c*2})([console.log])
//("array")(function(c,i,a){return c*2})([console.log])
    ();

