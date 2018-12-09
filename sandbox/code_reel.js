//Here document
(function(s){
	console.log("Here document#1:",s);	
}(
	(function(){/*	
1,abcd
1,efg
1,hijkl
	*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "")

));

//poc
(function(s){
	console.log("poc:",s);	
}(
	(function(f){
		return f(function(){/*	
	1,abcd
	1,efg
	1,hijkl
		*/});
	})(function(s){return s.toString()})
));