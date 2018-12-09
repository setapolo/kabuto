//middle-square method  very rough
//reel 0
(function(s){
	console.log("reel0",s)
})(
	(function(i){
		var l = (i).toString().length;
		return (i*i).toString().substring(2,l+2);
	})
	(12345)
);

//middle-square method  very rough
//reel 0
(function(s){
	console.log("reel1",s)
})(
	(function(c){
		var l = (j).toString().length;
		f =function(j){
			return (j) ? (j*j).toString().substring(2,l+2);

		}
		return f;
	})
	(12345)()
);
