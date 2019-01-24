//#014_001 closure cascading //Face hugger#1
(function(j){
	console.log("014_001 head",j);
	var f = (function(i){
		j=j+i;
		console.log("014_001 body",j);
		return f;
	});
	return f;
})
(1)(1)(1)(1)(1)
(1)(1)(1)(1)(1)
(1)(1)(1)(1)(1)
;

//#014_002 console.log
(function(a){
	var ii=0;
	console.log("014_001 head",a);
	var f = (function(i){
		a[ii]=ii;
		ii++;
		console.log("014_001 body",a);
		return f;
	});
	return f;
})
([])
(1)(1)(1)(1)(1)
(1)(1)(1)(1)(1)
(1)(1)(1)(1)(1)
;
