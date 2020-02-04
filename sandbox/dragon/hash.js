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

//hash
console.log("only",
	(function(rr){
		return function(s){
			return (s)?(function(c){
				return (rr[s])?rr[s].exec(c).toString():true;
			}):rr;
		}
	})({"number":/^[0-9]+/mig})("number")(`
123456english
	`)
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


console.log("004",
	(function(rr){
		var f= function(s){
			
			var ff=(function(a){
				return a.map(function(c){
					return (rr[c])?rr[c].exec(s).toString():ff;					
				})
			})
			return (s)?ff:rr;
		}
		return f;
	})
({
	"number"		:/[0-9]+/,
	'alphabet' 		:/[a-zA-Z]+/,
	'^number' 	:/[^0-9]+/g
})
("123456english002")
(["number","number","others"])
[2](["alphabet","alphabet","others"])

);


console.log("005",
	(function(rr){
		var f= function(s){
			var aa="";
			var ff=(function(a){
				return a.map(function(c){
					aa = aa.concat((rr[c])?rr[c].exec(s).toString():"");
					return (rr[c])?aa:ff;					
				})
			})
			return (s)?ff:ff;
		}
		return f;
	})
({
	"number"		:/[0-9]+/,
	'alphabet' 		:/[a-zA-Z]+/,
	'^number' 	:/[^0-9]+/g
})
("123456english002")
(["number","number","others"])
[2](["alphabet","alphabet","others"])

);



console.log(
	(/[:dice:]/).exec("abc").toString()
)