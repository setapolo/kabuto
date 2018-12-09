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
// tuple take2

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
	().map((function(c,i,a){
		return ["<tr>",c,"</tr>"].join();
	}))
);


// tuple take3

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
	("<tr>")
		("row")
	("</tr>")
	()

);

// tuple take4

(function (s) {
	console.log("tuple",s);
})(
	(function(s){
		return (function(s){
			var a=[s];		
			var f=function(s){
				a = (!s)? a : a.concat(s);  
				return (!s)?(a):f;
				}
			return f;
		})
		("<tr>")
		(s)
		("</tr>")
		()
	}("_row_"))
);


