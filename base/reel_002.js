//base
(function(s){
	console.log("base",s)
})(
(function(){
	return (function(){
		var f = function(){
			return f;
		}
		return f;
	})()()()()()()()()
})()
);




//base
(function(s){
	console.log("base",s)
})(
(function(ss){
	var aa=[ss];
	return (function(c){
		aa = aa.concat(c);
		var f = function(c){
			aa=(c) ? aa.concat(c):aa;
			return (c) ? f:aa;
		}
		return f;
	})(1)(2)(3)(4)(5)(6)(7)()
})("a,b,c,d")
);



















