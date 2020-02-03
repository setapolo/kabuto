 (function(rr){
    var s='';
    var a=[];
    var o={};
    var ret={};
    var f=null;
    var is = function(c){
//            console.log(typeof c,ss,(c)?true:false);
            return function(sss){
                var ss=Object.prototype.toString.call(c).slice(8, -1);
                var type=typeof sss;
                var b = (type=="boolean")?(c!=null):(sss==ss);
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
        is(c)("String")
        (function(){
            s=(s)?s:c;
            is(o[s])(true)
                (function(){o[s].push(c)})
                (function(){
                    is(f)(true)
                    (function(){o[s]=f;f=null})    
                    (function(){o[s]=[];})
                    
                });
        })(function(){
            is(c)(true)
                (function(){
                    is(c)("Function")(function(){
                            f=c;
                    })
                    is(o[s])(true)(function(){o[s].push(c)})
                    a.push(c);
                })
                (function(){s=""});
        });
        is(c)(true)
            (function(){})
            (function(){s=""});
        return (c!=null)?set:map;
    };
    var map=function(c){
        is(c)
        ("String")(function(){
            is(o[c])("Function")(function(){o[c].call("")})
            s=c;
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
(function(){console.log(5678)})
    ("double")()()
("array")
    (1)(1)(1)(1)(1)(1)(1)(1)(1)(1)()
("types")([console.log])
("array")(function(c,i,a){return c*2})(function(c,i,a){return c*2})([console.log])
("array")(function(c,i,a){return c*2})([console.log])
("array")("double")
();

