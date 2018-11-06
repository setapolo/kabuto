(function(s){
	console.log("r#1:",s);	
}(
	(function(){/*	
		printf("Hello, World!");
	*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "")

));

