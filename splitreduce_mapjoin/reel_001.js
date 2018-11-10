(function(s){
	console.log("sprmaj",s);
})(
	(function(s){
		return s.split("").map(
			function(c,i,a){
				return [i,":","[",c,"]"].join(" ")
			}
		).reduce(function(m,c,i,a){
			return [m,c].join(" ");
		})
	})("123456|78910")
);