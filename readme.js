//You are nowhere near alone

//#001_001 s represents String
(function(s){
  console.log(s);
})("abcdefg");

//#001_002 a is Array
(function(s){
  var a = s.split("");		
  console.log(a);
})("abcdefg");

//#001_002 j is integer
(function(s){
  var j = parseInt(s);		
  console.log(j);
})("12345");

//#003 array to string
(function(a){
  var s = a.join("");		
  console.log(s);
})(["a","b","c","d"]);

//#003_002 test data test trail
(function(a){
  var s = a.join("");		
  console.log(s);
//})(["a","b","c","d"]);
})(["a","b","c","d"]);

//#003_003 null trail
(function(a){
  var s = (a) ? a.join(""):null;
  console.log(s);
//})(["a","b","c","d"]);
})(null);

//#003_004 undefined trail
(function(a){
  var s = (a) ? a.join(""):null;
  console.log(s);
//})(["a","b","c","d"]);
})(undefined);

//#003_005 Nan trail, reduplication
(function(j){
  var s =  (!isNaN(parseInt(j))) ? parseInt(j):null;		
  console.log(s);
//})("1234");
//})(null);
//})(1234);
})("one");




