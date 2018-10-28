
//http://bonsaiden.github.io/JavaScript-Garden/
// c represents object
(function (s) {
	console.log(s);
})(
	(function (c) {
	    return Object.prototype.toString.call(c).slice(8, -1);
	})
	//	("type")
	//	(12345)
	//	(null)
	//	(undefined)
	//	(NaN)
		([12345])
);

