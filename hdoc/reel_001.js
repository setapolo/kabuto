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
(function(f){
	var s = (function(){
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
	console.log("sec1:",f);
	console.log("sec1:",[].toString.call([1,2,3,4]));
	s = f[0][0].apply(s);
	console.log("arg1:",""+s);
	s = f[1][0].apply(s,f[1][1]);
	console.log("arg2:",""+s);
	s = f[2][0].apply(s,f[2][1]);
	console.log("arg3:",""+s);
	s = f[3][0].apply(s,f[3][1]);
	console.log("arg4:",""+s);
	s = f[4][0].apply(s,f[4][1]);
	console.log("arg5:",""+s);
	s = f[5][0].apply(s,f[5][1]);
	console.log("arg6:",""+s);
	s = f[6][0].apply(s,f[6][1]);
	console.log("arg7:",""+s);

})(
	(function(a){
		(function(){
			a=[arguments];
			var f = function(){
				a=a.concat(arguments);
				return f;
			};
			return f;
		})
		(arguments.callee.toString)
		("".match,[/(?:\/\*(?:[\s\S]*?)\*\/)/])
		([].pop)
		("".replace,[/^\/\*/, ""])
		("".replace,[/\*\/$/, ""])
		("".split,[/\n/])
		([].slice,[1,-1]);
		return a;
	})([])
);

//normalization

(function(f){
	//heredoc plane
	var s = (function(){
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
	var HEAD=0,TAIL=1;
	var sss = f.map(function(c,i,a){
		s = c[HEAD].apply(s,c[TAIL]);
	})
	console.log("sec1:",sss);
	console.log("sec1:",s);
})(
	(function(a){
		//function array plane
		(function(){
			a=[arguments];
			var f = function(){
				a=a.concat(arguments);
				return f;
			};
			return f;
		})
		(arguments.callee.toString)
		("".match,[/(?:\/\*(?:[\s\S]*?)\*\/)/])
		([].pop)
		("".replace,[/^\/\*/, ""])
		("".replace,[/\*\/$/, ""])
		("".split,[/\n/])
		([].slice,[1,-1])
		([].join,["\n"])
		;
		return a;
	})([])
);



//normalization

(function(s){
	var HEAD=0,TAIL=1;
	(function(a){
		//function array plane
		(function(){
			a=[arguments];
			var f = function(){
				a=a.concat(arguments);
				return f;
			};
			return f;
		})
		(arguments.callee.toString)
		("".match,[/(?:\/\*(?:[\s\S]*?)\*\/)/])
		([].pop)
		("".replace,[/^\/\*/, ""])
		("".replace,[/\*\/$/, ""])
		("".split,[/\n/])
		([].slice,[1,-1])
		([].join,["\n"])
		;
		return a;
	})([]).map(function(c,i,a){
		s = c[HEAD].apply(s,c[TAIL]);
	})
	console.log("sec2_2:",s);
})(
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
	})
);

