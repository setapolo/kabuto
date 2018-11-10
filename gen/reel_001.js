//rnd001 random integer
(function(s){
	console.log("rnd001",s);
})(
	(function(i){
	  return i;		
	})(
		(function(i,j){
			return Math.floor((Math.random()*(j-i))+i)
		})(1,10)
	)
);

//rnd002 random integer
(function(s){
	console.log("rnd002",s);
})(
	(function(f){
	  return f();		
	})(
		(function(i,j){
			return (function(){
				return Math.floor((Math.random()*(j-i))+i)
			})
		})(1,10)
	)
);
//rnd002 random integer
(function(s){
	console.log("rnd002_002",s);
})(
	(function(f){
	  return [f(),f(),f(),f(),f()];		
	})(
		(function(i,j){
			return (function(){
				return Math.floor((Math.random()*(j-i))+i)
			})
		})(1,10)
	)
);

//rnd003 
(function(s){
	console.log("rnd003",s);
})(
	(function(j){
		return Math.floor(Math.random()*j)
	})(10)
);

//rnd004 
(function(s){
	console.log("rnd004",s);
})(
	(function(a){
		return a[Math.floor(Math.random()*a.length)]
	})(["a","b","c","d","e","f"])
);

