//CAST IN THE NAME OF GOD. YE NOT GUILTY. 
//be jungish https://en.wikipedia.org/wiki/Carl_Jung

//#eval take1 
(function(s){
	console.log("eval#1:",s);	
})(function(ss){
	return eval(ss);
}("1+1"));

//eval hdoc
(function(s){
	console.log("eval#2:",s);	
})(function(ss){
	return eval(ss);
}(
	(function(){/*	
	1+1
	*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "")

	));

//eval hdoc with error code
(function(s){
	console.log("eval#3:",s);	
})(function(ss){
	try {
		return eval(ss);
	}catch (e) {
		return e.toString();
	}
}(
	(function(){/*	
	Nan
	*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "")

	));

//eval hdoc with error code -> definition_missing
(function(s){
	console.log("eval#4:",s);	
})(function(ss){
	try {
		return eval(ss);
	}catch (e) {
		return(e.toString().match(/^ReferenceError: (.*) is not defined$/)[1])+"=''";
	}
}(
	(function(){/*	
	Nan
	*/}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "")

	));


	var flg=true;
	while(flg){
		try{
			(function(s){
				console.log("1passed"+flg+s);
				var f = (function(s){
					console.log("2passed"+flg+s);
					(!s)?flg=false:null;
					return f;
				});
				return f;
			})(Table)(TR)(DIV)(Nan)();
		}catch(e){
			console.log(e.toString());
			console.log("var "+(e.toString().match(/^ReferenceError: (.*) is not defined$/)[1])+"='1';");
			eval("var "+(e.toString().match(/^ReferenceError: (.*) is not defined$/)[1])+"='1';");
		}
		console.log("loop"+flg);
	}
	console.log(Table);
    


