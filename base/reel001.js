//base
(function(s){
	console.log("base",s)
})(
(function(){
	var k,s1,s2;
	s1 = Date.now();
	(function(){
		var f = function(){
			return f;
		}
		return f;
	})()()()()()()()()
	s2 = Date.now();
	return s2-s1;	
})()
);