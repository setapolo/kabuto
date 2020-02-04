
//reel 000: implementation data or behavior
var is = (function(rr){
	return function(s){
		rr['alphabet'] = /^[a-zA-Z]+$/;
		return (s)?(function(c){
			return (rr[s])?rr[s].test(c):true;
		}):rr;
	}
})({})
console.log(["123456","english"].filter(is("alphabet")));

var is = (function(rr){
	rr['number'] = /^[0-9]+$/;
	return is;
})(is());
console.log(["123456","english"].filter(is("number")));
console.log(["123456","english"].filter(is("others")));

var only = (function(rr){
	rr['number'] = /^[0-9]+/;
	return function(s){
		return (s)?(function(c){
			return (rr[s])?rr[s].exec(c).toString():true;
		}):rr;
	}
})(is());
console.log(only("number")("123456english"));
