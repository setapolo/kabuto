//dragon
var is = (function(rr){//Can part(Choice arena)
	return function(s){
		rr['alphabet'] = /^[a-zA-Z]+$/; //Definition Trash(Decision Makers)
		return (s)?(function(c){
			return (rr[s])?rr[s].test(c):true;//Function Trash(Solutions)
		}):rr;
	}
})({});
console.log(["123456","english"].filter(is("alphabet")));

var only = (function(rr){
	rr['number'] = /^[0-9]+/;
	return function(s){
		return (s)?(function(c){
			return (rr[s])?rr[s].exec(c).toString():true;
		}):rr;
	}
})(is());
console.log(only("number")("123456english"));


var a = (function(rr){
	return function(s){
		rr["random number"]=function(c,i,a){return Math.floor((Math.random()*(a.length))+1)}
		return (s)?(function(c){
			var aa = " ".repeat(c).split("");
			return (rr[s])?aa.map(rr[s]):aa;
		}):rr;
	}
})({})
console.log(a("random number")(20));
console.log(a("others")(20));


var a = (function(rr){
	return function(i){
		return (i)?(function(c){
			var aa = " ".repeat(i).split("");
			return (rr[c])?aa.map(rr[c]):aa;
		}):rr;
	}
})(a())
console.log(a(20)("random number"));
console.log(a(20)("others"));

var i = (function(rr){
	rr["random number"]=function(c,i,a){
		console.log("a",a);
		return Math.floor((Math.random()*(a.length))+1)}
	return function(i){
		return (i)?(function(c){
			return (rr[c])?rr[c](i,i,a(i)()):i;
		}):rr;
	}
})(a())
console.log(i(20)("random number"));
console.log(i(20)("others"));


