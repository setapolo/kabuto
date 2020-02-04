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
		})(a)(6)(7)(8)()
		return a;	
	})(

		(function(a){
			var f = function(c){
				(c)? a = a.concat(c):null;
				return (c)?f:a;
			}
			return f;
		})([])(1)(2)(3)(4)(5)()

	)
);

//Planaria #2
var Planaria=(function(a){
			var f = function(c){
				(c)? a = a.concat(c):null;
				return (c)?f:a;
			}
			return f;
		});
var a=Planaria([])(1)(2)(3)(4)(5)();
a=Planaria(a)(6)(7)(8)();
console.log("base#2",a);

//Planaria #3 test
_=(function(a){
			var f = function(c){
				(c)? a = a.concat(c):null;
				return (c)?f:a;
			}
			return f;
		});
a=_([])(1)(2)(3)(4)(5)(/**/);
a=_(a)(6)(7)(8)(/**/);
console.log("base#3",a);






















