//map type a
(function(a){
	a = a.map(
		function(c,i,a){
			return c+c;
		})
	console.log(a);
})(["a","b","c","d"]);

//map type b
(function(a,f){
	a = a.map(f)
	console.log(a);
})(["a","b","c","d"],
(function(c,i,a){
	return c+c;
}));

//map type c prototype as callback label
Array.prototype.map.double =function(c,i,a){
			return c+c;
		};
(function(a){
	a = a.map([].map.double);
	console.log(a);
})(["a","b","c","d"]);

// quadrisect(double split)
//#015_001 hdoc

(function (s) {
	console.log(s);
})(
	(function(){
/*
a,b,c,d
e,f,g,h
i,j,k,l
*/
	}).toString()
);


// quadrisect(double split)#1

(function (s) {
	console.log("#1",s);
})(
	(function(r){
		var a = "a:1,b:2,c:3,d:4".split(r);
		return (function(rr){
			return a.map(function(c,i,a){
					return c.split(rr);
				}
				)
		});
	})(/,/ig)(/:/ig)
);

// quadrisect(double split)#2
(function (s) {
	console.log("#2",s);
})(
	(function(s){
		return function(r){
			var a = s.split(r);
			return (function(rr){
				return a.map(function(c,i,a){
						return c.split(rr);
					}
					)
			});
		}
	})
	("a:1,b:2,c:3,d:4")
	(/,/ig)
	(/:/ig)
);

// quadrisect(double split)#3
(function (s) {
	console.log("#3",s);
})(
	(function(s){
		return function(r){
			return (!r)?s:(function(rr){
				return (!rr)?s:s.split(r).map(function(c,i,a){
						return c.split(rr);
					}
					)
			});
		}
	})
	("a:1,b:2,c:3,d:4")
	(/,/ig)
	(/:/ig)
);



