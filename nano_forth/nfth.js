//stack o represents operand and array as stack
//reel 0
(function(s){
	console.log("reel0",s)
})(
	(function(o){
		var a=[o];		
		var f=function(o){
			a = (!o)? a : a.concat(o);  
			return (!o)?(a):f;
			}
		return f;
	})
	(1)(1)()
);

//stack o represents operand and array as stack
//reel 1 only plus operator
(function(s){
	console.log("reel1",s)
})(
	(function(o){
		var a=[o];		
		var f=function(o){
			a = (!o)? a : a.concat(o);  
			return (!o)?(a.reduce(function(m,c,i,a){return m+c})) : (f);
			}
		return f;
	})
	(1)(1)()
);

(function(s){
	console.log("reel3",s)
})(
	(function(o){
		var a=[o];
		var p={};
		p["+"]=function(m,c,i,a){return m+c};	
		var f=function(o){
			a=(o=="+")?a:a.concat(o);
			return (o=="+")?(a.reduce(p["+"])):(f);
		}
		return f;
	})
	(1)(1)("+")
);


(function(s){
	console.log("reel3",s)
})(
	(function(o){
		var a=[o];
		var p={};
		p["+"]=function(m,c,i,a){return m+c};	
		var f=function(o){
			a=(o=="+")?a:a.concat(o);
			return (o=="+")?(a.reduce(p["+"])):(f);
		}
		return f;
	})
	(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)("+")
);

(function(s){
	console.log("reel4",s)
})(
	(function(o){
		var a=[o];
		var p={};
		var q='';
		p[q]=function(m,c,i,a){
			var h='(';
			var t=')';
			return m+h+c+t
		};	
		var f=function(o){
			console.log(arguments.callee['abcd'])
			a=(o==q)?a:a.concat(o);
			return (o==q)?(a.reduce(p[q])):(f);
		}
		f['abcd']=12345;
		return f;
	})
	(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)('')
);

