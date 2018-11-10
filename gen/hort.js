//head or tail
(function(s){
	console.log("001",s.map(function(c,i,a){return c.call()}));
})(
	(function(a){	
		(function(head){
			a=[head];
			var f = function(){
				return function(){					
					a=a.concat(head);
					return f
				}
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
		)()()()()()()()()()()()()()()()()()();	
	return a;	
	})([])
);


//head or tail
(function(s){
	console.log("001",s.map(function(c,i,a){return c.call()}));
})(
	(function(a){	
		(function(head){
			a=[head];
			var f = function(){
				return function(){					
					a=a.concat(head);
					return f
				}
			}		
			return f;
		})(
			(function(s){
				var i=0;
				return (function(){
					return s[i++];	
				})	
			})("abcdefghjijklmnopqrstuvwxyz")
		)()()()()()()()()()()()()()()()()()();	
	return a;	
	})([])
);
