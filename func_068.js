
(function (g){
  var ret=[];
  var rule=function(head){
    ret.push(head);
    var ff=function(k){
      var fff=function(v){
        ret.push([k,v]);
        return ff
      };
      return (k!=null)?(fff):(f(k));
    }
    return ff;
  }
  var f=function(){
    var aa =[].slice.call(arguments); 
    console.log((aa[0]!=null)?(0):(ret.reduce(
        function(p,c,i,a){
            return [p,c].join(" ");
            //p =(i==1)?p+"{":p;
            //return [p ,c.reduce(function(pp,cc,ii,aa){return [pp,": ",cc,"; "].join("")})].join(" ");
        }
        )+"}"
    ));
    return (aa[0]!=null)?rule:rule;
  }
  return f;
})(global)
    ("style")
        ("body")
          ("background")("black")
          ("color")("gray")()
        ("body2")
          ("background")("black")
          ("color")("gray")()
        ("body3")
          ("background")("black")
          ("color")("gray")()
        ("body4")
          ("background")("black")
          ("color")("gray")()


      ;

