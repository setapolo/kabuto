//[a,[b,c,d]] stype into function
console.log(["a",["b","c","d"]].reduce(
	function(m,c,i,a){
		return m+"("+c+")";
	}
	)
);

//[a,[b,c,d]] stype into function
(function(s){
	console.log(s)
})(
	(function(mcia){
		return 	["a",["b","c","d"]].reduce(mcia);
	}(function(m,c,i,a){
			return m+"("+c+")";
	  }
    ))
);

//[a,[b,c,d]] stype into function
(function(s){
	console.log(s)
})(
	(function(a){
		return 	a.reduce(function(m,c,i,a){
			return m+"("+c+")";
	  });
	}(
		["a",["b","c","d"]]
    ))
);

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
);
