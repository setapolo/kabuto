//Making use of arguments.callee or any of its properties is highly discouraged.
//http://bonsaiden.github.io/JavaScript-Garden/#function.arguments

//poc#1
(function(s){
	console.log("sec1:",s);
})(
(function(){
	var k,s1,s2;
	s1 = Date.now();
	var ff=(function(s){
		var c=arguments.callee;
		var f = function(s){
			return (s)?f:c;
		}
		return (s)?f:c;
	})
	(1) (2)(3)(4)(5)(6)(7)(8)()
	(1) (2)(3)(4)(5)(6)(7)(8)()
	()
	s2 = Date.now();
	return (s2-s1)+":"+ff;	
})()
);


//poc#1
(function(s){
	console.log("sec2:",arguments);
})(
(function(){
	var k,s1,s2;
	s1 = Date.now();
	var aa = (function(aa){
		var ss=(function(s){
			var c=arguments.callee;
			var a = [s];
			var f = function(s){
				(!s)?null:a = a.concat(s); 
				(!s)?aa.push(a):null; 
				return (s)?f:c;
			}
			return (s)?f:c;
		})
		(1) (2)(3)(4)(5)(6)(7)(8)()
		(1) (2)(3)(4)(5)(6)(7)(8)()
		(1) (2)(3)(4)(5)(6)(7)(8)()
		(1) (2)(3)(4)(5)(6)(7)(8)()
		(1) (2)(3)(4)(5)(6)(7)(8)()
		();
		return aa;
	})([]);
	s2 = Date.now();
	return aa;	
})()
);
