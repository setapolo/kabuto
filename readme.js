//#014_001 closure cascading ***Face hugger***
(function(j){
	console.log("014_001 head",j);
	var f = (function(i){
		j=j+i;
		console.log("014_001 body",j);
		return f;
	});
	return f;
})
(1)(1)(1)(1)(1)
(1)(1)(1)
(1)(1)
(1)(1)
(1)
(1)
(1)
;

//#014_002 arrrray / snake head and body
(function(a){
	var j=0;
	console.log("014_002 head",a);
	var f = (function(i){
		a[j]=j+i;
		j++;
		console.log("014_002 body",a);
		return f;
	});
	return f;
})([])
    (1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1);

//#014_004 arrrray / head,body and tail
(function(a){
	var j=0;
	console.log("014_004 head",a);
	var f = (function(i){
		var ff = function(ii){
			return (ii)?tt(ii):f//tail as false case;
		}
		var tt = function(iii){
			a[j]=j+iii;
			j++;
			console.log("014_004 body",a);
			return ff;
		}
		return tt(i);
	});
	return f;
})([])
    (1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)();


//#014_005 arrrray / top, head,body and tail
(function(a){
	var j=0;
	console.log("014_005 top",a);
	var f = (function(i){
		console.log("014_005 head",a);
		var ff = function(ii){
			//tail as false case;
			return (ii)?tt(ii):f
		}
		var tt = function(iii){
			a[j]=j+iii;
			j++;
			console.log("014_005 body",a);
			return ff;
		}
		return tt(i);
	});
	return f;
})([])
    (1)(1)(1)(1)()(1)()(1)();

//#014_006 arrrray / Godzilla 
var a = (function(a){
	var j=0;
	var f = (function(i){
		var ff = function(ii){
			//tail as null case;
			return (ii)?tt(ii):f
		}
		var tt = function(iii){
			a[j]=j+iii;
			j++;
			return ff;
		}
		return (i)?tt(i):a;
	});
	return f;
})([])//Grrrrrrrrrrr
    (1)(1)(1)()
    (1)(1)()
 (1)(1)(1)(1)()
    (1)(1)(1)()
    (1)(1)()
    (1)(1)()(1)(1)(1)()();
console.log("#014_006 arrrray / Godzilla",a)

//#014_007 arrrray / 2d array 
var a = (function(a,j){
	j=j || -1;//stopgaps.....
	var f = (function(i,jj){
		jj=jj || 0;
		j=j+1;
		a[j]=[]
		var ff = function(ii){
			return (ii)?tt(ii):f//tail as null case;
		}
		var tt = function(iii){
			a[j][jj]=jj+iii;
			jj++;
			return ff;
		}
		return (i)?tt(i):a;//flush as null case
	});
	return f;
})([])
    (1)(1)(1)(1)()
    (1)(1)(1)(1)()
    (1)(1)(1)(1)()
    (1)(1)(1)(1)()();
console.log("#014_007 arrrray / 2d array","\n",a)

//#014_001_02 closure cascading meets method cascading ***Face hugger#2***
var pp=function(j){
	console.log("014_001_02 head",j);//closure cascading
	var f = (function(i){
		console.log("014_001_02 body",i);
		return f;
	});
	return f;
};
pp.//method cascading
call(this,1).
	call(this,2).
		call(this,3).
			call(this,4).
				call(this,5);


//#014_001_03 closure cascading ***Face hugger#2***
(function(j){
	console.log("014_001_03 head",j);
	var f = (function(i){
		console.log("014_001_03 body",i);
		return f;
	});
	return f;
}).
call(this,1).
	call(this,2).
		call(this,3).
			call(this,4).
				call(this,5).
					call(this,6).
						call(this,7).
							call(this,8).
								call(this,9).
									call(this,10);

//#014_001_04 closure cascading ***Face hugger#3***
[1,2,3,4,5].reduce(function (p,c,i,a){
	p = (i==1) ? (function(j){
		console.log("014_001_04 head",j);
		var f = (function(i){
			console.log("014_001_04 body",i);
			return f;
		});
		return f;
		})(p) : p;
	return p.call(p,c);
});

console.log("15",
`
Tyger! Tyger! burning bright
In the forests of the night,
What immortal hand or eye
Could frame thy fearful symmetry?
`
);

console.log("014_001_05",
`
Tyger! Tyger! burning bright
In the forests of the night,
What immortal hand or eye
Could frame thy fearful symmetry?
`.split("\n").
reduce(function (p,c,i,a){
	p = (i==1) ? (function(aa){
		var ii =0;
		var f = (function(c){
			aa.push(ii+":"+c);
			ii++;
			return (a.length == ii) ? aa:f ;
		});
		return f;
		})([])(p) : p;
	return p.call(p,c);
})
);

//closure cascading meets method cascading
console.log("014_001_06",
	(function(rr){
		var f = function(s){
			var ff = function(cmd,arg){
				s = rr[cmd].apply(s,arg);	
				console.log("014_001_06",s);
				return ff;	
			}
		return ff;
		}
		return f;	
	})
	({
			split:function(){return "".split.apply(this,arguments); },
			slice:function(){return [].slice.apply(this,arguments); }
	})
	(
	`
Tyger! Tyger! burning bright
In the forests of the night,
What immortal hand or eye
Could frame thy fearful symmetry?
	`
	)("split",["\n"])("slice",[1,-1])
);

//closure cascading meets method cascading
console.log("014_001_07",
	(function(rr){
		var f = function(s){
			var ff = function(cmd,arg){
				s = rr[cmd].apply(s,arg);	
				console.log("014_001_07",s);
				return ff;	
			}
		return ff;
		}
		return f;	
	})
	({
			split:function(){return "".split.apply(this,arguments); },
			slice:function(){return [].slice.apply(this,arguments); },
			splitTrim(r){
				return "".split.apply(this,[r]).slice(1,-1);
			}	
	})
	(
	`
Tyger! Tyger! burning bright
In the forests of the night,
What immortal hand or eye
Could frame thy fearful symmetry?
	`
	)("splitTrim",["\n"])
);


//methodMissing meets clousure cascading with regexp as member name
(function(rr){//heart
	rr = new Proxy(rr, rr.handler);
	var f=function(s){
		rr.caller(s);
		return f;
	};
	return f
})({//head
	  caller(s){
		console.log(this[s].call());  
	  },
	  methodMissing(s) {
	    return this[s]=function(){return s};
	  },
	  handler:{
		  get(c, s) {
		    return (s in c) ? c[s] : 
		    (typeof c['methodMissing'] === 'function') ? c['methodMissing'](s): 
		    null;}
	  }
})("this")//tail
	("is")
		("a")
			(/[a-z]/)("is")("this")("a")(/[a-z]/);

//once a bone 
(function(rr){//heart
	var f=function(s){ 
		console.log(s);
		return f;//recursion calling for closure cascading
	};
	return f
})({//headless
})("this")//tail(closure cascading-Dragon code)
	("is")
		("a")
			([])(NaN)(null)("*")(/[a-z]/)
				("is")("this")("a")(/[a-z]/);

//Love is function
(function(rr){//heart
	var f=function(c){ //"pattern matching" like
		rr.a=rr.a.concat(rr.typeWas(c,/./)?rr[c.toString().replace(/[/]/ig,"")]:c);
		console.log("rr",rr.a);
		return f;//recursion calling for closure cascading
	};
	return f
})({a:[],
	typeWas(c1,c2){
		var f=function(c){return Object.prototype.toString.call(c).slice(8, -1)};
		return (f(c1)==f(c2));
	},
	love(s){console.log("I am dating with" + s)}})
	("I")(/love/)("you")();

//workaround#1 cascading & members method of f
console.log("workaround#1",
(function(c){
	var a=[c];
	var f=function(cc){
		a=a.concat(cc);
		return f;
	}
	f["tail"]=function(c){return Object.prototype.toString.call(c).slice(8, -1)};
	return f;
})("a")("a")("a")("a")("a")("a")("a").tail([])
);


//workaround#2 a bit forth like 
//https://en.wikipedia.org/wiki/Forth_(programming_language)
console.log("workaround#2",
(function(c){
	var a=[c];
	var f=function(cc){
		console.log("ff",ff(cc));
		console.log("fff",fff(cc)(/./));
		a=a.concat(cc);
		return f;
	}
	ff=function(c){return Object.prototype.toString.call(c).slice(8, -1)};
	fff = function(c1){
		return function(c2){
			return (ff(c1) == ff(c2))
		}
	}
	return f;
})(1)(1)(/.+/)(2)(/./)
)



//workaround#3 a bit forth like 
//https://en.wikipedia.org/wiki/Forth_(programming_language)
console.log("workaround#3",
(function(c){
	var a=[c];
	var f=function(cc){
		console.log("ff",ff(cc));
		console.log("fff",fff(cc)(/./));
		console.log("ffff",ffff(cc)(/./));
		a=a.concat(cc);
		return f;
	}
	var ff=function(c){return Object.prototype.toString.call(c).slice(8, -1)};
	var fff = function(c1){
		return function(c2){
			return (ff(c1) === ff(c2))
		}
	}
	var ffff = function(c1){
		return function(c2){
			return (c1.toString() === c2.toString());
		}
	}

	return f;
})(1)(1)(/.+/)(2)(/./)
)



//workaround#4 more forth like 
//https://en.wikipedia.org/wiki/Forth_(programming_language)
console.log("workaround#4",
(function(c){
	var a=[c];
	var f=function(cc){
		console.log("typ",typ(cc));
		console.log("cmp typ",cmp(typ)(cc)(/./));
		console.log("cmp to_s",cmp(to_s)(cc)(/./));
		a=a.concat(cc);
		return f;
	}
	var typ=function(c){return Object.prototype.toString.call(c).slice(8, -1)};
	var to_s=function(c){return c.toString()};
	var cmp = function(ff){return function(c1){return function(c2){
				return (ff(c1) === ff(c2))
			}}}
	return f;
})(1)(1)(/.+/)(2)(/./)
)


//workaround#5 more forth like 
//https://en.wikipedia.org/wiki/Forth_(programming_language)
console.log("workaround#5",
(function(rr){
	var f=function(cc){
		console.log("typ",rr.typ(cc));
		console.log("cmp typ",rr.cmp(rr.typ)(cc)(/./));
		console.log("cmp to_s",rr.cmp(rr.to_s)(cc)(/./));
		return f;
	}
	return f;
})({
	typ(c){return Object.prototype.toString.call(c).slice(8, -1)},
	to_s(c){return c.toString()},
	cmp(ff){return function(c1){return function(c2){
				return (ff(c1) === ff(c2))
			}}}
})(1)(1)(/.+/)(2)(/./)
)


//workaround#6 more forth like 
//https://en.wikipedia.org/wiki/Forth_(programming_language)
console.log("workaround#6",
(function(c){
	var a=[c];
	var f=function(cc){
		console.log("typ",typ(cc));
		console.log("cmp typ",cmp(typ)(cc)(/./));
		console.log("cmp to_s",cmp(to_s)(cc)(/./));
		a=a.concat(cc);
		return f;
	}
	var typ=function(c){return Object.prototype.toString.call(c).slice(8, -1)};
	var to_s=function(c){return c.toString()};
	var eq = function(c1){return function(c2){return (c1 === c2)}}
	var cmp = function(ff){return function(c1){return function(c2){
				return eq(ff(c1))(ff(c2));
			}}}
	return f;
})(1)(1)(/.+/)(2)(/./)
)

//workaround#7 more forth like eq
//https://en.wikipedia.org/wiki/Forth_(programming_language)
console.log("workaround#7",
(function(c){
	var a=[c];
	var f=function(cc){
		console.log("typ",typ(cc));
		console.log("cmp typ",cmp(typ)(cc)(/./));
		console.log("cmp to_s",cmp(to_s)(cc)(/./));
		a=a.concat(cc);
		return f;
	}
	var typ=function(c){return Object.prototype.toString.call(c).slice(8, -1)};
	var to_s=function(c){return c.toString()};
	var eq = function(e){return function(q){return (e === q)}}
	var cmp = function(c){return function(m){return function(p){
				return eq(c(m))(c(p));
			}}}
	return f;
})(1)(1)(/.+/)(2)(/./)
)


//workaround#8 more forth like eqt
//https://en.wikipedia.org/wiki/Forth_(programming_language)
console.log("workaround#8",
(function(c){
	var a=[c];
	var f=function(cc){
		console.log("eqt",eqt(cc)(1)("true!!"));
		a=a.concat(cc);
		return f;
	}
	var typ=function(c){return Object.prototype.toString.call(c).slice(8, -1)};
	var to_s=function(c){return c.toString()};
	var eq = function(e){return function(q){return (e === q)}}
	var eqt = function(e){return function(q){
		return function(t){
			return (e === q)?t:false
		}
		}
	}
	var cmp = function(c){return function(m){return function(p){
				return eq(c(m))(c(p));
			}}}
	return f;
})(1)(1)(/.+/)(2)(/./)
)


//workaround#9 more forth like eqt
//https://en.wikipedia.org/wiki/Forth_(programming_language)
console.log("workaround#9",
(function(c){
	var a=[c];
	var f=function(cc){
		console.log("eqt",eqt(c)(cc)("true!!"));
		a=a.concat(cc);
		return f;
	}
	var typ=function(c){return Object.prototype.toString.call(c).slice(8, -1)};
	var to_s=function(c){return c.toString()};
	var eq = function(e){return function(q){return (e === q)}}
	var eqt = function(e){return function(q){
		return function(t){
			return eq(e)(q)?t:false
		}
		}
	}
	var cmp = function(c){return function(m){return function(p){
				return eq(c(m))(c(p));
			}}}
	return f;
})(1)(1)(/.+/)(2)(/./)
)


//workaround#10 more forth like teq
//https://en.wikipedia.org/wiki/Forth_(programming_language)
console.log("workaround#10",
(function(c){
	var a=[c];
	var f=function(cc){
		console.log("teq",teq("true!!")(c)(cc));
		a=a.concat(cc);
		return f;
	}
	var typ=function(c){return Object.prototype.toString.call(c).slice(8, -1)};
	var to_s=function(c){return c.toString()};
	var _eq = function(_t){return function(e){
		return function(q){return (e === q)?_t:false}}
	};
	var teq = function(t){return _eq(t)};
	var cmp = function(c){return function(m){return function(p){
				return eq(c(m))(c(p));
			}}};
	return f;
})(1)(1)(/.+/)(2)(/./)
)


//workaround#11 more forth like 
//https://en.wikipedia.org/wiki/Forth_(programming_language)
console.log("workaround#11",
(function(c){
	var f=function(cc){
		console.log("eq",
			eq(c)(cc)(tf)("yes")("no")
			);
		return f;
	}
	var tf = function(flg){return function(t){return function(f){return (flg)?t:f}}};
	var eq = function(e){return function(q){return function(f){
		return f(e===q);
	}}};
	return f;
})(1)(2)(2)(1)(1)(1)
);

//compare(3) and double calling not necessary tough
(function(a){
	var f =function(b){
	  	compare(a)(b)(compare)(true)(bingo);
	  	return f;
	};
	var compare=function(e){//compare(3)
		return function(q){
	  		return function(f){
	  			return f(e===q);
	  		}
	  	}
	};
	var bingo=function(bool){
		console.log([bool,bool?'bingo':'ne']);
	}
	return f;
})(1)([])(1)(2)(1)(4)(5)();



//compare3 and double calling not necessary tough
console.log("compare3");
(function(a){
	var f =function(b){
	  	compare(a)(b)(bingo)(nero);
	  	return f;
	};
	var compare=function(e){//compare(3)
		return function(q){
	  		return function(f){
	  			return f(e===q);
	  		}
	  	}
	};
	var bingo=function(bool){
		console.log([bool,bool?'bingo':"ne"]);
		return compare(bool)(true);		
	}
	var nero=function(bool){
		console.log([bool,bool?'yesyes':"nono"]);
		return compare(bool)(true);		
	}
	return f;
})(1)([])(1)(2)(1)(4)(5)();



//compare3 and double calling not necessary tough
console.log("compare3#3");
(function(a){
	var _bingo=function(_bool){
		return function(bool){
			console.log([bool,bool?_bool[0]:_bool[1]]);
		};		
	}
	var _bool=["bingooo","ne!!"];
	var bingo=_bingo(_bool);
	var f =function(b){
	  	compare(a)(b)(bingo);
	  	return f;
	};
	var compare=function(e){//compare(3)
		return function(q){
	  		return function(f){
	  			return f(e===q);
	  		}
	  	}
	};
	return f;
})(1)([])(1)(2)(1)(4)(5)();



//compare3 and double calling not necessary tough
console.log("compare3#4");
(function(a){
	var _bingo=function(_bool){
		return function(bool){
			console.log([bool,bool?_bool[0]:_bool[1]]);
		};		
	}
	var bingo=_bingo(["bingooo","ne!!"]);
	var f =function(b){
	  	compare(a)(b)(bingo);
	  	return f;
	};
	var compare=function(e){//compare(3)
		return function(q){
	  		return function(f){
	  			return f(e===q);
	  		}
	  	}
	};
	return f;
})(1)([])(1)(2)(1)(4)(5)();

//compare(3)#5 & tf(3) 
console.log("compare3#5");
(function(a){
	var tf=function(t){return function(f){
		return function(bool){
			console.log([bool,bool?t:f]);
		}
	}};
	var f =function(b){
		var bingo=tf(b+" is bingooo")(b+" is ne!!");

	  	compare(a)(b)(bingo);

	  	return f;
	};
	var compare=function(e){return function(q){
	  	return function(f){
	  		return f(e===q);
	  	}
	}};
	return f;
})(1)(0)(1)(2)(1)(4)(5);



//compare(3)#6 & tf(4) 
console.log("compare3#6");
(function(a){
	var tf=function(t){return function(fa){var j=0;
			return function(bool){j++;
				console.log(["call#"+j,bool?t:fa]);
				return function(fc){
					console.log("fc",fc);
					return fc(bool);
				}				
			}
		}};
	var f =function(b){
		var bingo=tf(b+" is bingooo")(b+" is ne!!");
	  	compare(a)(b)(bingo)(bingo)(bingo)(bingo)(bingo);
	  	return f;
	};
	var compare=function(e){return function(q){
	  		return function(f){
	  			return f(e===q);
	  		}
	  	}};
	return f;
})(1)(0)(1)(2)(1)(4)(5);


//switch(2) & numbers(4) 
console.log("switch2");
(function(a){
	var n=function(s){var j=0;numbers=[];
			var f = function(n){
				numbers = numbers.concat(n);
				var ff = (function(i){
					console.log(i+s+numbers[i]);
					return ff
				});
				return (n)?f:ff;
			}
			return f;			
		};
	var is=n(" is ")("zero")("one")("two")();
	var f =function(b){
	  	switch2(b)(is);
	  	return f;
	};
	var switch2=function(n){
	  		return function(f){
	  			return f(n);
	  		}
	  	};
	return f;
})([])(0)(1)(2)(1)(4)(5);



//switch(2)#2 & numbers(4) 
console.log("switch2#2");
(function(a){
	var n=function(s){var j=0;numbers=[];
		var nf = function(n){
			numbers = numbers.concat(n);
			return (n)?nf:(function(i){j++;
				console.log([i+s+numbers[i],"---call#"+j]);
				return function(fc){
					return fc(i);
				}				
			});
		}
		return nf;			
	};
	var is=n(" is ")("zero")("one")("two")();
	var f =function(b){
	  	switch2(b)(is)(is)(is);
	  	return f;
	};
	var switch2=function(n){
	  		return function(f){
	  			return f(n);
	  		}
	  	};
	return f;
})([])(0)(1)(2)(1)(4)(5);



//switch(2)#3 & numbers(4) factorization as fcc
console.log("switch2#3");
(function(a){
	var fcc = function(c){return function(fc){return fc(c)}};
	var n=function(s){var j=0;numbers=[];
		var nf = function(n){
			numbers = numbers.concat(n);
			return (n)?nf:(function(i){j++;
				console.log([i+s+numbers[i],"---call#"+j]);
				return fcc(i);
			});
		}
		return nf;			
	};
	var f =function(b){
		var is=n(" is ")("zero")("one")("two")();//o^2
	  	switch2(b)(is)(is)(is);
	  	return f;
	};
	var switch2=function(n){
		return fcc(n);
	};
	return f;
})([])(0)(1)(2)(1)(4)(5);

console.log("respite#1",
(function(a){
	a["a"]={};
	a["a"]["b"]={};
	a["a"]["b"]["c"]={};
	a["a"]["b"]["c"]["d"]={};
	a["a"]["b"]["c"]["d"]["e"]={};
	return a.a.b.c;
})({})
);


console.log("respite",
(function(c){var a=[];
	var f=function(m){
		a.push(m);
		
		return (m)?f:a;
		}
	return f;
})({})("b")("c")("d")("e")()
);

console.log("txae",
(function(){
	p="prototype";
	s="toString";
	c="call";
	return (function(o){
		console.log(o);
		console.log(o[p]);
		console.log(o[p][s]);
		console.log(o[p][s]);
		console.log(o[p][s][c]);
		oo=o[p][s];
		console.log(oo[c]);
		return oo[c](/./)
	})(Object);
//	return Object["prototype"]["toString"]["call"](/./);
})()
);

//closure caseding for method cascading.
//arguments.callee.caller
(function(s){
	var typ = function(o){var i=0;
		var s=Object.prototype.toString.call(o)["slice"](8,-1);
		return function(f){i++;
			return (f)?f(s):s
		}
	} 
	console.log("aaaaaaaaaaaaaaaaa",
		typ("")(typ)(typ)(typ)(typ)(typ)(typ)(typ)()
	);	
})();

//FASBORN 
console.log(
	function(){
		var FASBORN=(function(a){
			var f =function(m){
				var s=Object.prototype.toString.call(m)["slice"](8,-1);
				a=(m!=undefined)?a.concat(s):a;
				return (m!=undefined)?f:a;
			}
			return f;
		})([])	([].pop)//Function
				([])	//Array
				("")	//String
				(true)	//Boolean
				({})	//Object
				(/./)	//Regexp
				(NaN)	//Number
				();		//EOC End of Call
		return FASBORN;
	}()
);

//true or false
console.log(
	function(){
		var typ=function(m){
			return Object.prototype.toString.call(m)["slice"](8,-1);
		} 
		var FASBORN=(function(a){
			var f =function(m){
				console.log(m,typ(s),(m)?true:false);
				return f;
			}
			return f;
		})([])	([].pop)//Function
				([])	//Array
				(".")	//String
				(true)	//Boolean
				({})	//Object
				(/./)	//Regexp
				(1)		//Number
				(NaN)	//Number but false
				(0)		//Number but false
				(-1)	//Number
				(Infinity)	//Number
				(null)  //Null but false
				("")  	//String but false
				(false) //boolean and false
				(undefined)
				();		//EOC End of Call
		return FASBORN;
	}()
);


//JSON
console.log(
	function(){
		var typ=function(m){
			return Object.prototype.toString.call(m)["slice"](8,-1);
		} 
		var FASBORN=(function(a){
			var f =function(m){
				a[typ(m)]=typ(m);
				return (m)?f:a;
			}
			return f;
		})({})	([].pop)//Function
				([])	//Array
				(".")	//String
				(true)	//Boolean
				({})	//Object
				(/./)	//Regexp
				(1)		//Number
				();		//EOC End of Call
		return JSON.stringify(FASBORN);
	}()
);
console.log("proto#1");
//JSON calling proto#1
console.log(
	function(){
		var cl=function(c){
			var f=function(m){c=(c[m])?c[m]:c;
				return (m!=undefined)?f:c;
			}
			return f;
		};
		var typ=function(m){
			return Object.prototype.toString.call(m)["slice"](8,-1);
		};
		var FASBORN=(function(a){
			var f =function(m){a[typ(m)]=typ(m);
				return (m!=undefined)?f:a;
			};
			return f;
		})({})	([].pop)//Function
				([])	//Array
				(".")	//String
				(true)	//Boolean
				({})	//Object
				(/./)	//Regexp
				(1)		//Number
				();		//EOC End of Call
		return cl(JSON)("stringify")()(FASBORN);
	}());


console.log("JSON calling");
//JSON calling / rolling proto#1
console.log(
	function(){
		var typ=function(m){
			return Object.prototype.toString.call(m)["slice"](8,-1);
		};
		var calling=function(c){
			var f=function(m){
				c=(c[m])?c[m]:c;
				return (m!=undefined)?f:function(ff){return ff(c)};
			};
			return f;
		};
		var rolling = function(ff){a={};
			var f =function(m){
				a[typ(m)]=typ(m);
				return (m!=undefined)?f:ff(a);
			};
			return f;
		};
		return (calling)(JSON)("stringify")()(rolling)
										([].pop)([])(".")(true)({})(/./)(1)();
	}()
);

console.log("JSON calling#2");
//JSON calling / rolling proto#1
console.log(
	function(rr){//closure cascading part
		return (rr.calling)(JSON)("stringify")()
						(rr.rolling)([].pop)([])(".")(true)({})(/./)(1)();
	}({	//definition part
		calling(c){
			var f=function(m){
				c=(c[m])?c[m]:c;
				return (m!=undefined)?f:function(ff){return ff(c)};
			};
			return f;
		},
		rolling(ff){a={};
			var typ=function(m){
						return Object.prototype.toString.call(m)["slice"](8,-1);
					};
			var f =function(m){
				a[typ(m)]=typ(m);
				return (m!=undefined)?f:ff(a);
			};
			return f;
		}
	})
);



//plan9
console.log(
(function(){
	var typ=function(m){
		return Object.prototype.toString.call(m)["slice"](8,-1);
	};
	var _case = function(ff){var a = {};
		var f = function(m){
			return (_case==m)?function(s){
//				console.log("cccc",a,a[ff(s)],s);
				return a[ff(s)];
			}:function(n){
				a[ff(m)]=n;
				return f;
			}
		}
		return f;
	}
	var cases = _case(typ)
					(1)(function(n){return n})
					(".")(function(){return 2})
					([])(function(){return 3})
					({})(function(){return 4})
					([].pop)(function(){return 5})
					(_case);
	console.log("cases:",cases);				
	var times = function(s){
		return function(n){
			return s.repeat(cases(n)(n)).match((new RegExp(s,"ig")));
		}
	}
	return times("oxo")(10)
})()
);


//plan9
console.log(
(function(){
	var typ=function(m){
		return Object.prototype.toString.call(m)["slice"](8,-1);
	};
	var _case = function(ff){var a = {};
		var f = function(m){
			return (_case==m)?function(s){//own function as closeure's closer
				return a[ff(s)];
			}:function(n){a[ff(m)]=n;
				return f;
			}
		}
		return f;
	};
	var cases = _case(typ) //case dragon
					(1)(function(n){return n})
					(".")(function(s){return parseInt(s)})
					([])(function(a){return a.length})
					({})(function(){return 4})
					([].pop)(function(){return 5})
								(_case);//own function as closeure's closer 


	var times = function(s){return function(n){
			return s.repeat(cases(n)(n)).match((new RegExp(s,"ig")));
	}}
	return times("oxo")([1,1,1,1]);
})());

//forth like very very rough
console.log("forth like",
(function(rr){
	var f = function(c){
		return (rr[c])?rr[c]():f;
	} 
	return f;
})({"/.+/":function(){return 2}})(1)(1)(/.+/)
)



//forth like bit rough
console.log("forth like#2",
(function(rr){var a=[];
	var f = function(c){
		a = a.concat(c);
		return (rr[c])?rr[c](a):f;
	} 
	return f;
})({"/.+/":function(a){return a[0]+a[1]}})//beforth
	(1)(1)(/.+/)
)


//forth like bit rough
console.log("forth like#3",
(function(rr){var a=[];
	var f = function(c){
		a = (rr[c])?rr[c](a):a.concat(c);
		return f;
	} 
	return f;
})(
{"/.+/":function(a){var l=a.pop();a[0]=a[0]+l;return a}, //plus command
 "/./":function(a){return console.log(a)}//print command
}
)//beforth
	(1)(1)(1)(/.+/)(/.+/)(/./)
)

//forth like bit rough
console.log("forth like#3",
(function(rr){var a=[];
	var f = function(c){
		a = (rr[c])?rr[c](a):a.concat(c);
		return f;
	} 
	return f;
})(
{
"/.+/":function(a){var l=a.pop();a[0]=a[0]+l;return a}, //plus command
"/.-/":function(a){var l=a.pop();a[0]=a[0]-l;return a}, //plus command
"/./":function(a){return console.log(a)}//print command
}
)//beforth
	(1)(1)(1)(/.+/)(/.-/)(/./)
)
