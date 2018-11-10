//You are nowhere near alone

//#001_001 s represents String
(function(s){
	console.log("",s);
})("abcdefg")
;

//#001_002 a is Array
(function(a){
	console.log("",a);
})(
	(function(s){
		return s.split("");		
	})("abcdefg")
)
;

//#001_002 j is integer
(function(j){
	console.log("",j);
})(
	(function(s){
	  return parseInt(s);		
	})("12345")
)
;

//#003 array to string
(function(s){
	console.log("",s);
})(
	(function(a){
	  return a.join("");		
	})(["a","b","c","d"])
)
;

//#003_002 test data test trail
(function(s){
	console.log("",s);
})(
	(function(a){
	  return a.join("");		
	//})(["a","b","c","d"]);
	})(["a","b","c","d"])
)
;

//#003_003 null trail
(function(s){
	console.log("",s);
})(
	(function(a){
  		return (a) ? a.join(""):null;
	//})(["a","b","c","d"]);
	})(null)
)
;

//#003_004 undefined trail
(function(s){
	console.log("003_004",s);
})(
	(function(a){
  		return (a) ? a.join(""):null;
	//})(["a","b","c","d"]);
	})(undefined)
)
;

//#003_005 Nan trail, reduplication
(function(s){
	console.log("003_005",s);
})(
	(function(s){
	  return (!isNaN(parseInt(s))) ? parseInt(s):null;		
	//})("1234");
	//})(null);
	//})(1234);
	})("one")
)
;



//#003_006 Nan trail 
(function(s){
	console.log("003_006",s);
})(
	(function(j){
		return !isNaN(j)?j:null;
	})(
		parseInt('one')
	)
)
;

//#004_001 j plus i
(function(s){
//	console.log("004_001",s);
})(
	(function(j){
		return function(){
			j++;
			console.log("004_001",j);
			return this;
		};
	})(1)()
)
;

//#014_001 function's functions
(function(j){
	console.log("014_001start"+j);
	f= (function(){
		console.log("014_001a"+j);
		j++;
		return f
	});
	return f;
})(1)()()()()()()()()()()()()()();

//#014_002 function's functions
(function(j){
	console.log("014_002start"+j);
	f= (function(i){
		console.log("014_002odd"+j);
		console.log("i"+i);
		j++;
		return function(ii){
			console.log("014_002even"+j);			
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








