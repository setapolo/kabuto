(function(s){
	console.log("001",s);
})(
	(function(f){
		return [f(),f(),f(),f(),f()];
	})(
		(function(s){
			return (function(){
				return s.split("").reduce(function(m,c,i,a){
					return a[Math.floor(Math.random()*(i+1))]; 
				});	
			})	
		})("abcdefghjijklmnopqrstuvwxyz")
	)	
)