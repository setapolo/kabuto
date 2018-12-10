
//http://bonsaiden.github.io/JavaScript-Garden/
// c represents object
(function (s) {
	console.log("Object.prototype:",s);
})(
	(function (c) {
	    return Object.prototype.toString.call(c);
	})
	//	("type")
	//	(12345)
	//	(null)
	//	(undefined)
	//	(NaN)
		([12345])
);





////

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


(function (a) {
	aa= a.map(function(c,i,a){
		return [c,Object.prototype.toString.call(c).slice(8, -1)];
	})
	console.log(aa);
})(
	(function(a){
		(function(c){
			a=[c];
			var f=function(c){
				a=a.concat(c);
				return f;
			}
			return f;
		})
		("type")
		(12345)
		(null)
		(undefined)
		(NaN)
		([12345])
		(NaN.toString)
		return a;
	})([])
);

function isString(obj) {
    return typeof (obj) == "string" || obj instanceof String;
};