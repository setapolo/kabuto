var jslinks = (function(){
/*
https://code.jquery.com/jquery-1.12.4.js
https://code.jquery.com/ui/1.12.1/jquery-ui.js
*/
}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");
console.log(jslinks.split("\n").map(function(c,i,a){return '<script src="URL"></script>'.replace(/URL/ig,c);}));


(function(s){
  console.log(s);
})
 ( (function(HEAD,TAIL){
   // arguments(HEAD)
   // arguments(TAIL)
    return [HEAD,"(",TAIL,")"]
  })("0","1")
);
//["<",HEAD,">"]

(function(s){
  console.log(s);
})(
(function(){
  var HEAD=0,TAIL=1;
//  var aa = [HEAD,"(",TAIL,")","[",HEAD,"]"];
  var aa = ["<",HEAD," ",TAIL,">","</",HEAD,">"];
  return [].reduce.call(
    ["a",["b","c","d"],["e","f","g"],["h","i","j"]]
    ,function(m,c,i,a){
      var arg = arguments;
      var hed = a[0];
      var a=aa.map(
        function(c,i,a){
          return isNaN(c)?c:((c==0)?hed:arg[c]);  
//          return isNaN(c)?c:arg[c];  
        })
      return a.join("");
       }
    )
})()
);

