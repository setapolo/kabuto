//stack o represents operand and array as stack
//reel 1 only plus operator
(function(s){
	console.log("reel1",s)
})(
	(function(o){
		var a=[o];
		var c=o;
		var i=0;
		var j=2;
		var p={};
		p["+"]=function(m,c,i,a){return m+c};	

		var f=function(o){
			i++;
			a = (o)?a.concat(o):a;
			return (i<j)?f:a.slice(1).reduce(p[c]);
			}
		return f;
	})
	("+")(1)(1)
);
