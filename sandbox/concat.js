// stack take1
(function (s) {
	console.log("stack#1",s);
})(
	(function(s){
		var a=[s];		
		var f=function(s){
			a = (!s)? a : a.concat(s);  
			return (!s)?(a):f;
			}
		return f;
	})
	(1)
	(2)
	().reduce(function(m,c,i,a){
		return m+c;
	})
);

// stack take2
(function (s) {
	console.log("stack#2",s);
})(
	(function(s){
		var a=[s];		
		var f=function(s){
			a = (!s)? a : a.concat(s);  
			return (!s)?(a):f;
			}
		return f;
	})
	(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)
	().reduce(function(m,c,i,a){
		return m+c;
	})
);

