(function(ss){
  console.log(ss);
})(
  (function(a){
    return (function(str){
      return a.map(function(c,i,a){
              return str
            }).join("\n");
    })
  })(
`
a
b
c
`.split("\n").slice(1,-1)
  )(
  (function(){/*
1
2
3
4
5
*/}.toString().split("\n").slice(1,-1).join("\n"))
  )
);



(`
a
b
c
`).split("\n").slice(1,-1);

var CR=["\n"];
var HEADTAIL=[1,-1];
var s="12\n34\n56\n78\n90";
s=''.split.apply(s,CR);
s=[].slice.apply(s,HEADTAIL);
s=[].join.apply(s,CR);
console.log("check#1",s);

var CR=["\n"];
var HEADTAIL=[1,-1];
var s=`
12
34
56
78
90
`;
var a=[
[''.split,CR],
[[].slice,HEADTAIL],
[[].join,CR]
];
a.map(function(c,i,a){
  s = c[0].apply(s,c[1]);
  return c;
})
console.log("check#2",s);


var CR=["\n"];
var HEADTAIL=[1,-1];
var s=`
12
34
56
78
90
`;
var a=[
[''.split,CR],
[[].slice,HEADTAIL],
[[].join,CR]
].map(function(c,i,a){
  s = c[0].apply(s,c[1]);
  return c;
})
console.log("check#3",s);


(function(s){
  console.log("check#4",s);
})(
(function(a){
  var CR=["\n"];
  var HEADTAIL=[1,-1];
  return [[
  `
12
34
56
78
90
  `],
  [''.split,CR],
  [[].slice,HEADTAIL],
  [[].join,CR]
  ].reduce(function(m,c,i,a){
    return c[0].apply(m,c[1]);
  })
}([]))
);



(function(){
  var CR=["\n"];
  var HEADTAIL=[1,-1];
  return 
  (function(){
    var f =(function(){
      return f;
    });
    return f;
  })
  (''.split,CR)
  ([].slice,HEADTAIL)
  (''.join,CR)
  ;
})();



