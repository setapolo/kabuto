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



