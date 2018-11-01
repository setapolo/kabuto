(function(s){
	console.log("r#1:",s);	
}(
	(function(){/*	
(function(s){
	console.log("r#1:",s);	
}("")
	*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "")

));

