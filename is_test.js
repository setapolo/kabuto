var is = function(c){
    return function(sss){
        var ss=Object.prototype.toString.call(c).slice(8, -1);
        var type=typeof sss;
        var b = (type=="boolean")?(c!=null):(sss==ss);
        return function(f){
            (b==true)?f.apply(c,[c,ss,sss]):0;
            return function(ff){
                (b==false)?((ff)?ff.apply(c,[c,ss,sss]):0):0;
                return is(c);
            };
        }
    }
};
is(1)("Number")(function(c,ss,sss){console.log(c,"is",sss)})
is("1")("Number")(function(c,ss,sss){console.log(c,"is",sss)})(function(c,ss,sss){console.log(c,"is not",sss)})
