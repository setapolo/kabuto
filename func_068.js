
(function (g){
  var ret=[];
  var rule=function(head){
    ret.push(head);
    var ff=function(k){var fff=function(v){
        ret.push([k,v]);
        return ff
      };
      return (k!=null)?(fff):(f(k));
    }
    return ff;
  }
  var f=function(top){
    console.log((top!=null)?(0):function(){
           tt=ret.shift();
          return ret.reduce(function(p,c,i,a){
            var s = (i==1)?(function(){
                a.shift();
                return [tt," ","{",p.join(":"),"; ",c.join(":"),";"].join("");
            })():p+c+" <"+(typeof c) + "> "+c;
            a.shift();
            return s;
          })+"}";  
    }()) 
    return (top!=null)?rule:rule;
  }
  return f;
})(global)
    ("style")
        ("body")
          ("background")("black")
          ("color")("gray")()
          ;

