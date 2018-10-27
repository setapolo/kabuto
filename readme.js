//You are nowhere near alone

//#001 s represents String
(function(s){
  console.log(s);
})("abcdefg");

//#002 a is Array
(function(s){
  var a = s.split("");		
  console.log(a);
})("abcdefg");

//#003 array to string
(function(a){
  var s = a.join("")		
  console.log(s);
})(["a","b","c","d"]);


