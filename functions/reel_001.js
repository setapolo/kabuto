//base
(function(s){
	console.log("base1",s)
})(
);

//#014_001 function's functions, head/body model 
(function(j){
	console.log("014_001 head"+j);
	f= (function(){
		console.log("014_body"+j);
		j++;
		return f
	});
	return f;
})(1)()()()()()()()()()()()()()();

//#014_001 function's functions head/body/tail(null) model
(function(j){
	console.log("014_001 head"+j);
	f= (function(i){
		console.log("014_body"+j);
		j++;
		return (i)?f:null;
	});
	return f;
})(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)();



//#014_002 function's functions odd even
(function(j){
	console.log("014_002start"+j);
	f= (function(i){
		console.log("014_002odd"+j);
		console.log("i"+i);
		j++;
		return function(ii){
			console.log("014_002even"+j);			
			console.log("ii"+ii);
			j++;
			return f;	
		}
	});
	return f;
})(1)(2)(3)(4)(5)(6)()()()()()()()()();

//#014_003 function's functions syllogism
(function(j){
	console.log("014_003_head"+j);
	f=(function(i){
		console.log("014_003_1 "+j);
		console.log("i"+i);
		j++;
		return function(ii){
			console.log("014_003_2 "+j);			
			console.log("ii"+ii);
			j++;
			return function(iii){
				console.log("014_003_3 "+j);			
				console.log("iii"+iii);
				j++;
				return f;	
			}
		}
	});
	return f;
})(1)(2)(3)(4)(5)(6)()()()()()()()()();


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
	s = aa.map((function(s,ss,sss){
		console.log("base x1",s,ss,sss);
		var aa=[s];
		f = function(c,i,a){
			aa = (i==undefined) ? aa.concat(c): aa;
			console.log("base x2aa",aa,(i==undefined)?null:aa[i]);
			console.log("base x2cia",c,i,a);
			return f};
		return f}
		)("head")("b")("c")("d")("e")
		);
	console.log("sec0:",s);
}(
	(function(){
/*
1,2,3,4,5
2,2,3,4,5
3,2,3,4,5
4,2,3,4,5
5,2,3,4,5
*/
	}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "").split(/\n/).slice(1,-1)
));





(function(aa){
	s = aa.map((function(s,ss,sss){
		console.log("base x1",s,ss,sss);
		var aa=[s];
		f = function(c,i,a){
			aa = (i==undefined) ? aa.concat(c): aa;
			console.log("base x2aa",aa,(i==undefined)?null:aa[i]);
			console.log("base x2cia",c,i,a);
			return f};
		return f}
		)("head")("b")("c")("d")("e")
		);
	console.log("sec0:",s);
}(
	(function(){
/*
1,2,3,4,5
2,2,3,4,5
3,2,3,4,5
4,2,3,4,5
5,2,3,4,5
*/
	}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "").split(/\n/).slice(1,-1)
));


