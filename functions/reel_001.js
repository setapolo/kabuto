//base
(function(s){
	console.log("base",s)
})(
);

//base
(function(s){
	console.log("base",s)
})(
	(function(a){
		(function(i){
			a=[i];
			var f= (function(ii){
				a = a.concat("i");
				return (function(iii){
					a = a.concat("ii");
					return (function(iiii){
						a = a.concat("iii");
						return (function(iiiii){
							a = a.concat("iiii");
							return f;
						})						
					})
				})	
			})
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

