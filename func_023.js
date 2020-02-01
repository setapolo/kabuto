 (function(rr){
    var l='';
    var s='';
    var a=[];
    var o={};
    _ = function(c){return function(sss){return (sss==Object.prototype.toString.call(c).slice(8, -1))}}
    var set=function(c){
        //ss= Object.prototype.toString.call(c).slice(8, -1);
        var f=_(c); 
        console.log(f("String"))
        a.push(c);
        //console.log(typeof c,ss,(c)?true:false);
        return (c!=null)?set:map;
    };
    var map=function(c){
        //ss= Object.prototype.toString.call(c).slice(8, -1);
        //var f=_(c);
        _(c)("Function")?
            function(){
                s=c.call(a,a)
            }()
            :0;

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
("types")(console.log)
    ();

