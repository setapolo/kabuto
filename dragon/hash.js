//hash
console.log("only",
	(function(rr){
		return function(s){
			return (s)?(function(c){
				return (rr[s])?rr[s].exec(c).toString():true;
			}):rr;
		}
	})({"number":/^[0-9]+/})("number")("123456english")
);

console.log("002",
	(function(rr){
		var f= function(s){
			return (s)?(function(c){
				return (rr[c])?rr[c].exec(s).toString():true;
			}):rr;
		}
		return f;
	})
({
	"number"	:/[0-9]+/,
	'alphabet' 	: /[a-zA-Z]+/
})
("123456english002")
("alphabet")
//("number")
);


console.log("003",
	(function(rr){
		var f= function(s){
			return (s)?(function(a){
				return a.map(function(c){
					return (rr[c])?rr[c].exec(s).toString():f;					
				})
			}):rr;
		}
		return f;
	})
({
	"number"		:/[0-9]+/,
	'alphabet' 		:/[a-zA-Z]+/,
	'^number' 	:/[^0-9]+/g
})
("123456english002")
(["alphabet","number","^number","others"])[3]
("zzzz1111bbbb")
(["alphabet","number"])
);