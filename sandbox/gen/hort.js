//head or tail
(function(s){
	console.log("001",s.map(function(c,i,a){return c.call()}));
})(
	(function(a){	
		(function(head){
			a=[head];
			var f = function(){
				a=a.concat(head);
				return f
			}		
			return f;
		})(
			(function(s){
				return (function(){
					return s.split("").reduce(function(m,c,i,a){
						return a[Math.floor(Math.random()*(i+1))]; 
					});	
				})	
			})("abcdefghjijklmnopqrstuvwxyz")
		)()()()()();	
	return a;	
	})([])
);


//head or tail
(function(s){
	console.log("002",s.map(function(c,i,a){return c.call()}));
})(
	(function(a){	
		(function(head){
			a=[head];
			var f = function(){
				a=a.concat(head);
				return f
			}		
			return f;
		})(
			(function(s){
				var i=0;
				return (function(){
					return s[i++];	
				})	
			})("abcdefghjijklmnopqrstuvwxyz")
		)()()();	
	return a;	
	})([])
);



//head or tail
(function(s){
	console.log("003",s);
	console.log("003",s.map(function(c,i,a){return c.call()}));
})(
	(function(a){	
		(function(head){
			a=[head];
			var f = function(){
				a=a.concat(head);
				return f
			}		
			return f;
		})(
			(function(s){
				var i=0;
				return (function(){
					return s[i++];	
				})	
			})("abcdefghjijklmnopqrstuvwxyz")
		)(1)(2)(3)(4)(5)(6)(7)(8);	
	return a;	
	})([])
);
