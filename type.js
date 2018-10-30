
//Array of Array
(function (s) {
	console.log("#1:",s);
})(
	(function (aa) {
		return aa;
	})
		([[1],[2]])
);



