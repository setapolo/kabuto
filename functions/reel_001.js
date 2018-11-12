//base
(function(s){
	console.log("base1",s)
})(
);

//base
(function(s){
	console.log("base2",s)
})(
	(function(a){
		(function(i){
			a=["0"];
			var f= (function(i){
				a = a.concat("i");
				return (function(ii){
					a = a.concat("ii");
					return (function(iii){
						a = a.concat("iii");
						return (function(iiii){
							a = a.concat("iiii");
							return f;
						})						
					})
				})	
			});
			return f;
		})(function(){return 1})
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		()()()()
		return a;
	})([])	
);

//base
(function(s){

	console.log("base2",s)
})(
	(function(aa){
		(function(i){
			aa=["head"];
			var f= (function(i){
				var a = [arguments];
				return (function(ii){
					a = a.concat("ii");
					return (function(iii){
						a = a.concat("iii");
						return (function(iiii){
							a = a.concat("iiii");
							aa.push(a);
							return f;
						})						
					})
				})	
			});
			return f;
		})(function(){return 1})
		(1)(2)(3)(4)
		(5)(6)(7)(8)
		("head")()()()
		("head")()()()
		("head")()()()
		(function(){return 1})()()()
		()()()()
		()()()()
		()()()()
		()()()()
		return aa;
	})([])	
);


//base
(function(s){
	s=s.reduce(function(m,c,i,a){
		return m+"\n"+c.reduce(function(m,c,i,a){
			return m+"-"+c;
		});
	});
	console.log("base3",s)
})(
	(function(aa){
		(function(i){
			aa=[["head"]];
			var f= (function(i){
				var a = [arguments];
				return (function(ii){
					a = a.concat("ii");
					return (function(iii){
						a = a.concat("iii");
						return (function(iiii){
							a = a.concat("iiii");
							aa.push(a);
							return f;
						})						
					})
				})	
			});
			return f;
		})(function(){return 1})
		(1)(2)(3)(4)
		(5)(6)(7)(8)
		("head")()()()
		("head")()()()
		("head")()()()
		(function(){return 1})()()()
		()()()()
		()()()()
		()()()()
		()()()()
		return aa;
	})([])	
);

(function(s){
	s=s.split(/\n/).slice(1,-1).map(function(c,i,a){return c.split(",").join("-")}).join("\n");
	console.log("sec0:",s);
}(
	(function(){
/*
1,2,3,4,5
a,b,c,d,e
1,2,3,4,5
a,b,c,d,e
*/
	}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "")
));

var a=[];
s=(function(s){
	console.log("reel_2",s)
	a=[s];
	var f=function(s){
		a=a.concat(s);
		console.log("reel_2_2",s)
		return f};
	return f;
})(1)(2)(3)(4)(5);
console.log(s);
console.log(a);



var aa=[];
s=[1,2,3,4,5].map(function(c,i,a){
	var f=function(s){
		aa=aa.concat(c);
		console.log("reel_3",c,aa)
		return f};
	return f;
}).map(function(c,i,a){
	return c.call(1,2);
})
console.log(s);
console.log(aa);

(function(s){
	s=s.split(/\n/).slice(1,-1).map(function(c,i,a){return c.split(",").map(function(c,i,a){return "("+c+")"});})
	console.log("sec0:",s);
}(
	(function(){
/*
1,2,3,4,5
a,b,c,d,e
1,2,3,4,5
a,b,c,d,e
*/
	}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "")
));



(function(s){
	s = [1,2,3,4,5].map(function(c,i,a){
		return function(){return c}	
	});
	s = (function(){f = function(){return f};
		return f})()()()()()()
	console.log("sec0:",s);
}(
	(function(){
/*
1,2,3,4,5
*/
	}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "")
));




(function(aa){
	s = aa.map(function(c,i,a){
		return function(){return c}	
	});
	s = (function(){
		f = function(c,i,a){return f};
		return f}
		)("a")("b")("c")("d")("e")

	console.log("sec0:",s);
}(
	(function(){
/*
1,2,3,4,5
1,2,3,4,5
*/
	}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "").split(/\n/).slice(1,-1)
));



(function(aa){
	s = aa.map((function(s){
		console.log("base x1",s);
		f = function(c,i,a){
			console.log("base x2",c);
			return f};
		return f}
		)("a")("b")("c")("d")("e")
		);
	console.log("sec0:",s);
}(
	(function(){
/*
1,2,3,4,5
1,2,3,4,5
*/
	}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "").split(/\n/).slice(1,-1)
));



