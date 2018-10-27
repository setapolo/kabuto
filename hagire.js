//map type a
(function(a){
	a = a.map(
		function(c,i,a){
			return c+c;
		})
	console.log(a);
})(["a","b","c","d"]);

//map type b
(function(a,f){
	a = a.map(f)
	console.log(a);
})(["a","b","c","d"],
(function(c,i,a){
	return c+c;
}));

//map type c prototype as callback label
Array.prototype.map.double =function(c,i,a){
			return c+c;
		};
(function(a){
	a = a.map([].map.double);
	console.log(a);
})(["a","b","c","d"]);



