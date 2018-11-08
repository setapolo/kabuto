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
  [].reduce.call(
    ["a",["b","c","d"],["b","c","d"],["b","c","d"]]
    ,function(m,c,i,a){
      var arg = arguments;
      var a=[0,"(",1,")"].map(
        function(c,i,a){
          return isNaN(c)?c:arg[c];  
        })
      return a.join("");
       }
    )
);
/*
//    var a=[arguments[0],"(",arguments[1],")"];
//    return arguments[0]+"("+arguments[1]+")";
//    return m+"("+c+")";
arguments[0]
double arguments
f=function(a){
  arguments[a[0]];
}
f(arguments)
[HEAD,'(',MID,')']
["<",HEAD,">"]これでフォームがきまる

実際の情報は流し込み

()printf abc efg
(cfunction)



[0,'(',1,')']これが実態
クロージャ多様
arguments[HEAD]
*/