//[a,[b,c,d]] stype into function
(function(s){
	console.log(s)
})(
	[].reduce.call(
		["a",["b","c","d"]]
		,function(m,c,i,a){
					return m+"("+c+")";
			  }
		)
)
;


//[a,[b,c,d]] stype into function
(function(s){
	console.log(s)
})(
	(function(f){
		return f.call(
			["a",["b","c","d"]]
			,function(m,c,i,a){
						return m+"("+c+")";
				  }
			)
	})([].reduce)
)
;

//[a,[b,c,d]] stype into function
(function(s){
	console.log(s)
})(
	(function(s){
		return [][s].call(
			["a",["b","c","d"]]
			,function(m,c,i,a){
						return m+"("+c+")";
				  }
			)
	})("reduce")
)
;


//[a,[b,c,d]] stype into function
(function(s){
	console.log(s)
})(
	(function(s,a){
		return [][s].call(a			
			,function(m,c,i,a){
						return m+"("+c+")";
				  }
			)
	})("reduce",["a",["b","c","d"]])
)
;

//[a,[b,c,d]] stype into function
(function(s){
	console.log(s)
})(
	(function(s,a,f){
		return [][s].call(a,f)
	})("reduce",["a",["b","c","d"]],function(m,c,i,a){
						return m+"("+c+")";
				  })
)
;


