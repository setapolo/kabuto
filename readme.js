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



//#003_006 Nan trail 
(function(j){
 j= !isNaN(j)	? j:null;
 console.log(j);
})(
parseInt('one')
);

//#004_001 j plus i
(function(j){
	return function(){
		j++;
		console.log(j);
		return this;
	};
})(1)();

//#014_001 function's functions
(function(j){
	console.log("start"+j);
	f= (function(){
		console.log("a"+j);
		j++;
		return f
	});
	return f;
})(1)()()()()()()()()()()()()()();

//#014_002 function's functions
(function(j){
	console.log("start"+j);
	f= (function(i){
		console.log("odd"+j);
		console.log("i"+i);
		j++;
		return function(ii){
			console.log("even"+j);			
			console.log("ii"+ii);
			j++;
			return f;	
		}
	});
	return f;
})(1)(2)(3)(4)(5)(6)()()()()()()()()();

//#015_001 hdoc
console.log(
(function(){
/*
comment1
comment2
comment3
*/
}).toString()
);

//
console.log("a"+"("+"b"+")");

console.log(["a","(","b",")"].join(""));

console.log("c(d)".replace(/c/ig,"a").replace(/d/ig,"b"));

console.log("c(d)".
			replace(/c/ig,"a").
			replace(/d/ig,"b")
			);

console.log(["a",["b"]].reduce(
	function(m,c,i,a){
		return m+"("+c+")";
	}
	)
);

console.log(["a",["b","c","d"]].reduce(
	function(m,c,i,a){
		return m+"("+c+")";
	}
	)
);

console.log(["a","b","c","d"].reduce(
	function(m,c,i,a){
		return m+"("+c+")";
	}
	)
);


console.log(["a"].reduce(
	function(m,c,i,a){
		return m+"("+c+")";
	}
	)
);


console.log(["a",["b","c",["d","e"]]].reduce(
	function(m,c,i,a){
		return m+"("+c+")";
	}
	)
);



console.log((false)?(2):(false)?3:1);








