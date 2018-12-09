
//reel 000: implementation data or behavior
var is = (function(rr){
	return function(s){
		rr['alphabet'] = /^[a-zA-Z]+$/;
		return (s)?(function(c){
			return rr[s].test(c);
		}):rr;
	}
})({})
console.log(["123456","english"].filter(is("alphabet")));

var is = (function(rr){
	rr['number'] = /^[0-9]+$/;
	return is;
})(is())
console.log(["123456","english"].filter(is("number")));
