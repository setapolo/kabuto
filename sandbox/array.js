//Array of Array :: double join
(function (s) {
	console.log("#1:",s);
})(
	(function (aa) {
		return aa.reduce(function(m,c,i,a){
			return m+c;
		});
	})
		([
			[1,2,3,4],
			[1,2,3,4],
			[1,2,3,4]
		]

			)
);

//#014_001 function's functions
(function(j){
	console.log("014_001start"+j);
	f= (function(){
		console.log("014_001a"+j);
		j++;
		return f
	});
	return f;
})(1)()()()()()()()()()()()()()();

