(function(s){
	console.log("sprmaj",s);
})(
	(function(s){
		return s.split("").map(
			function(c,i,a){
				return ["[",c,"]"].join(" ")
			}
		).reduce(function(m,c,i,a){
			return [m,c].join(" ");
		})
	})("123456")
);


(function(s){
	console.log("sprmaj",s);
})(
	(function(s){
		return s.split("").reduce(
			function(m,c,i,a){
				return [m,"(",c,")"].join(" ")
			}
		)
	})("123456")
);


(function(s){
	console.log("sprmaj",s);
})(
	(function(s){
		var LF = (s.match(/\r/))?"\r\n":"\n";
		return s.split(LF).map(
			function(c,i,a){
				return ["(",c,")"].join(" ")
			}
		).join(" ")
	})(
(function(){
/*
12345
67890
abcde
ABCDE
*/	
}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "")
	)
);