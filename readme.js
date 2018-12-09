//You are nowhere near alone

//#001_001 s represents String
(function(s){
	console.log("",s);
})("abcdefg")
;
//basic block is defined by anonymous function https://en.wikipedia.org/wiki/Anonymous_function#JavaScript


//#001_002 a is Array
(function(a){
	console.log("",a);
})(
	(function(s){
		return s.split("");		
	})("abcdefg")
)
;

//#001_003 i is integer
(function(i){
	console.log("",i);
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

//#003_002 test data test trail sets comment line
(function(s){
	console.log("#003_002",s);
})(
	(function(a){
	  return a.join("");		
//	})([1,2,3,4])//number case
	})(["a","b","c","d"])//string case
)
;

//#003_003 null trail
(function(s){
	console.log("#003_003",s);
})(
	(function(a){
  		return (a) ? a.join(""):null;
//	})([1,2,3,4])//number case
//	})(["a","b","c","d"])//string case
	})(null)//null case
)
;

//#003_004 undefined trail
(function(s){
	console.log("003_004",s);
})(//input part
	(function(a){
  		return (a) ? a.join(""):null;
//	})([1,2,3,4])//number case
//	})(["a","b","c","d"])//string case
//	})(null)//null case
	})(undefined)//undefined case
)
;

//004 function double call
(function(s){
	console.log("004",s);
})(
	(function(j){
		return function(i){
			return j+i;
		};
	})(1)(2)
)
;

//#014_001 function's functions, head/body model 
(function(j){
	console.log("014_001 head"+j);
	f= (function(){
		console.log("014_body"+j);
		j++;
		return f
	});
	return f;
})(1)()()()()()()()()()()()()()();

//#014_001 function's functions head/body/tail(null) model
(function(j){
	console.log("014_001 head"+j);
	f= (function(i){
		console.log("014_body"+j);
		j++;
		return (i)?f:null;
	});
	return f;
})(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)();



//#014_002 function's functions odd even
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

//#014_003 function's functions syllogism
(function(j){
	console.log("014_003_head"+j);
	f=(function(i){
		console.log("014_003_1 "+j);
		console.log("i"+i);
		j++;
		return function(ii){
			console.log("014_003_2 "+j);			
			console.log("ii"+ii);
			j++;
			return function(iii){
				console.log("014_003_3 "+j);			
				console.log("iii"+iii);
				j++;
				return f;	
			}
		}
	});
	return f;
})(1)(2)(3)(4)(5)(6)()()()()()()()()();

//#015 "Trash Can" model
var is = (function(rr){//Can part(Choice arena)
	return function(s){
		rr['alphabet'] = /^[a-zA-Z]+$/; //Definition Trash(Decision Makers)
		return (s)?(function(c){
			return (rr[s])?rr[s].test(c):true;//Function Trash(Solutions)
		}):rr;
	}
})({});
console.log("#015 Trash Can model",["123456","english"].filter(is("alphabet")));//Data Trash(Problems)
//#015 add a decision Maker
var is = (function(rr){
	rr['number'] = /^[0-9]+$/;//Definition Trash(Decision Makers)
	return is;
})(is());
console.log("#015 Trash Can model",["123456","english"].filter(is("number")));//Data Trash(Problems)


