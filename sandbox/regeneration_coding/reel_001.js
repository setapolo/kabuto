//tochu
(function(s){
	console.log("reg01",s)
})(
	(function(s){
		return s.split(/\n/).map(function(c,i,a){return c.replace(/[\t|\r]/ig,'')})
							.filter(function(c,i,a){return (c=='')?false:true})
							.map(function(c,i,a){return ["(",c,")"].join('')}).join('');
	})(

		(function(){/*	
	1
	2
	3
	4
	5	
		*/}).toString()
			.match(/(?:\/\*(?:[\s\S]*?)\*\/)/)
			.pop()
			.replace(/^\/\*/, "")
			.replace(/\*\/$/, "")
));

//tochu
(function(s){
	console.log("reg02",s)
})(
	(function(s){
		var sp = 'split',mp='map',rep='replace',fl="filter",j='join',q='';
		return s[sp](/\n/)[mp](function(c,i,a){return c[rep](/[\t|\r]/ig,'')})
						  [fl](function(c,i,a){return (c=='')?false:true})
						  [mp](function(c,i,a){return ["(",c,")"][j](q)})[j](q);
	})(

		(function(){/*	
	1
	2
	3
	4
	5	
		*/}).toString()
			.match(/(?:\/\*(?:[\s\S]*?)\*\/)/)
			.pop()
			.replace(/^\/\*/, "")
			.replace(/\*\/$/, "")
));


//Quine
(function f(){
//A quine is a non-empty computer program which takes no input and produces a copy of its own source code as its only output. The standard terms for these programs in the computability theory and computer science literature are "self-replicating programs", "self-reproducing programs", and "self-copying programs".
//https://en.wikipedia.org/wiki/Quine_(computing)
	var h = '(',t = ')',q ='',j ='join';
	console.log([h,f,t,h,t][j](q));
})();