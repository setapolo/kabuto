//tochu
(function(s){
	console.log(s)
})(
	(function(s){
		return s.split(/\n/).map(function(c,i,a){return ["(",c.replace(/[\t|\r]/ig,""),")"].join("")}).join("");
	})(

		(function(){/*	
	1
	2
	3
	4
	5	
		*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "")
));