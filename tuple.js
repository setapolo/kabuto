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
	("row1")
	("row2")
	("row3")
	("row4")
	("row5")
	()
);
