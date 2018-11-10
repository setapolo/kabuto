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

