(function(s){
	console.log("sec0:",s);
}(
	(function(){
	/*
	 <tr id="word1">  
	    <td>word2</td>
	    <td width = "20%">
	      <div class="float-right">
	        <input type="button" onClick="rec_start('word1','word2');" value="rec"　>
	      </div>
	    </td>
	  </tr> 
	*/
	}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "")
));


//
var sss = (function(){
/*
 <tr id="word1">  
    <td>word2</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('word1','word2');" value="rec"　>
      </div>
    </td>
  </tr> 
*/
})
['toString']()
['match'](/(?:\/\*(?:[\s\S]*?)\*\/)/)
['pop']()
['replace'](/^\/\*/, "")
['replace'](/\*\/$/, "");
//}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");


console.log(sss);

(function(s){
	console.log("sec1:",s);
	(function(s){
		console.log("sec1:",s);
	})(
		s.map(function(c,i,a){
			return c[0]+"("+c[1]+")";
		}).join(".")
	)
})(
(function(){
	var k,s1,s2;
	s1 = Date.now();
	var aa = (function(aa){
		var ss=(function(s){
			var c=arguments.callee;
			var a = [s];
			var f = function(s){
				(!s)?null:a = a.concat(s); 
				(!s)?aa.push(a):null; 
				return (s)?f:c;
			}
			return (s)?f:c;
		})
		('toString')('a')()
		('match')('b')()
		('pop')('c')()
		('replace')('d')()
		('replace')('e')()
		();
		return aa;
	})([]);
	s2 = Date.now();
	return aa;	
})()
);

//normalization

(function(a){
	(function(){
		var f = function(){
			return f;
		};
		return f;
	})
	([].toString)
	("".match,[/(?:\/\*(?:[\s\S]*?)\*\/)/])
	([].pop)
	("".replace,[/^\/\*/, ""])
	("".replace,[/\*\/$/, ""])
	("".split,[/\n/])
	([].slice,[1,-1]);
	return a;
})([])







