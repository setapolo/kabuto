
(function (g){
  var ret=[];
  var kvs=function(head){
    ret.push(head);
    var ff=function(k){var fff=function(v){
        ret.push([k,v]);
        return ff
      };
      return (k!=null)?(fff):(f(k));
    }
    return ff;
  };
  global.script=function(){
    var tt="script";
    var v= ret.reduce(function(p,c,i,a){
        var s = (i==1)?(function(){
            a.shift();
            return ["<",tt," ",p.join("='"),"' ",c.join("='")].join("");
        })():p+c+" <"+(typeof c) + "> "+c;
        a.shift();
        return s;
    })+["'>","</",tt,">"].join("");  
    console.log(v);
    return v;
  };
  global.div=function(){
    var tt="div";
    var v= ret.reduce(function(p,c,i,a){
        var s = (i==1)?(function(){
            a.shift();
            return ["<",tt," ",p.join("='"),"' ",c.join("='")].join("");
        })():p+c+" <"+(typeof c) + "> "+c;
        a.shift();
        return s;
    })+["'>","</",tt,">"].join("");  
    console.log(v);
    return v;
  };
  var f=function(top){
    var fff;
    ((top!=null)?(fff=top):function(){
              var s = ret.shift();
              s();        
    }()) 
    return (top!=null)?kvs:kvs;
  };
  return f;
})(global)
    ("document")
        (script)
          ("type")("text/javascript")
          ("src")("raphael.js")()
        (script)
          ("type")("text/javascript")
          ("src")("thinr.js")()
        (div)
          ("id")("d")
          ("class")("text")()
          ;

