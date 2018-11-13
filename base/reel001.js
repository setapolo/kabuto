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




//Planaria #1
(function(s){
	console.log("base",s)
})(
	(function(a){
		(function(){
			var f = function(c){
				(c)? a = a.concat(c):null;
				return (c)?f:a;
			}
			return f;
		})(a)(3)(4)(5)(6)(7)(8)()
		return a;	
	})(
		(function(a){
			var f = function(c){
				(c)? a = a.concat(c):null;
				return (c)?f:a;
			}
			return f;
		})([])(1)(2)()
	)
);