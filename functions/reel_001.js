//base
(function(s){
	console.log("base1",s)
})(
);

//base
(function(s){
	console.log("base2",s)
})(
	(function(a){
		(function(i){
			a=["0"];
			var f= (function(i){
				a = a.concat("i");
				return (function(ii){
					a = a.concat("ii");
					return (function(iii){
						a = a.concat("iii");
						return (function(iiii){
							a = a.concat("iiii");
							return f;
						})						
					})
				})	
			});
			return f;
		})(function(){return 1})
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		return a;
	})([])	
);

//base
(function(s){
	console.log("base2",s)
})(
	(function(aa){
		(function(i){
			aa=["head"];
			var f= (function(i){
				var a = [arguments];
				return (function(ii){
					a = a.concat("ii");
					return (function(iii){
						a = a.concat("iii");
						return (function(iiii){
							a = a.concat("iiii");
							aa.push(a);
							return f;
						})						
					})
				})	
			});
			return f;
		})(function(){return 1})
		(1)(2)(3)(4)
		(5)(6)(7)(8)
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		return aa;
	})([])	
);
