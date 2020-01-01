(function(aa){
	console.log("base2",aa)
	var a = aa[0];
	var b = aa[1];
	console.log("base2",Math.sqrt(Math.pow(a,2)+Math.pow(b,2)));
	console.log("base2",[[0,a],[b,a]]);
	console.log("base2",[[b,a],[b,0]]);

})(
	(function(a){
		(function(i){
			a = a.concat(i); 
			var f=function(i){
				a = a.concat(i); 
				return f;
			};
			return f;
		})(3)(4);
		return a;
	})([])	
);