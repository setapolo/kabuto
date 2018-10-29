//stack o represents operand and array as stack
//reel 0
(function(s){
	console.log("reel0",s)
})(
	(function(o){
		var a=[o];		
		var f=function(o){
			a = (!o)? a : a.concat(o);  
			return (!o)?(a):f;
			}
		return f;
	})
	(1)(1)()
);

//stack o represents operand and array as stack
//reel 1 only plus operator
(function(s){
	console.log("reel1",s)
})(
	(function(o){
		var a=[o];		
		var f=function(o){
			a = (!o)? a : a.concat(o);  
			return (!o)?(a.reduce(function(m,c,i,a){return m+c})) : (f);
			}
		return f;
	})
	(1)(1)()
);
