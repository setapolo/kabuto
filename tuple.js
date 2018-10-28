// tuple
(function (s) {
	console.log("tuple",s);
})(
	(function(s){
		var a=[s];		
		var f=function(s){
			a = (!s)? a : a.concat(s);  
			return (!s)?(a):f;
			}
		return f;
	})
	("a:1,b:2,c:3,d:4")
	("a:1,b:2,c:3,d:4")
	("a:1,b:2,c:3,d:4")
	("a:1,b:2,c:3,d:4")
	("a:1,b:2,c:3,d:4")
	()
);
