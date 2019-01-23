//You are nowhere near alone

//basic block is defined by anonymous function 
//https://en.wikipedia.org/wiki/Anonymous_function#JavaScript
//#001_001 s represents String
(function(s){
	console.log("#001_001:",s);
})("abcdefg")
;


//#001_002 "a" representes Array
(function(a){
	console.log("#001_002:",a);
})(
	(function(s){
		return s.split("");		
	})("abcdefg")
)
;

//#001_003 "a" representes integer
(function(i){
	console.log("#001_003:",i);
})(
	(function(s){
	  return parseInt(s);		
	})("12345")
)
;

//#003 array to string
(function(s){
	console.log("#003:",s);
})(
	(function(a){
	  return a.join("");		
	})([1,2,3,4])
)
;

//#003_002 test data test trail sets comment line
(function(s){
	console.log("#003_002:",s);
})(
	(function(a){
	  return a.join("");		
//	})([1,2,3,4])//number case
	})(["a","b","c","d"])//string case
)
;


//#003_004 undefined trail
(function(s){
	console.log("003_004",s);
})(//input part
	(function(a){
  		return (a) ? a.join(""):null;
//	})([1,2,3,4])//number case
//	})(["a","b","c","d"])//string case
//	})(null)//null case
	})(undefined)//undefined case
)
;

//004 function double call
(function(s){
	console.log("004",s);//device
})(
	(function(j){
		return function(i){
			return j+i;//function
		};
	})(1)(2)//(data1)(data2)
)
;


//#014_001 function's functions, head/body model 
(function(s){
	console.log("#014_001",s);
})(
	(function(p){//head call
		f= (function(c){//body,tail call
			p=(c)?p+c:p;
			return (c)?f:p;
		});
		return f;
	})(1)//head
	(1)(1)(1)(1)//body
	()//tail
);

//#014_002 function's functions, head/body model 
(function(s){
	console.log("#014_002",s);
})(
	(function(j){//head call
		f= (function(i){//body,tail call
			j=(i)?j+i:j;
			return (i)?f:j;
		});
		return f;
	})("1")//head
	("1")("1")("1")("1")//body
	()//tail
);


//#014_002 function's functions, head/body model 
(function(s){
	console.log("#014_003",s);
})(
	(function(j){//head call
		var head = j;
		j = "<"+j+">";
		f= (function(i){//body,tail call
			j=(i)?j+":"+i:j;
			return (i)?f:j+"</"+head+">";
		});
		return f;
	})("table")//head
	("width")("height")("cols")("rows")//body
	()//tail
);



//#015 "Trash Can" model
var is = (function(rr){//Can part(Choice arena)
	return function(s){
		rr['alphabet'] = /^[a-zA-Z]+$/; //Definition Trash(Decision Makers)
		return (s)?(function(c){
			return (rr[s])?rr[s].test(c):true;//Function Trash(Solutions)
		}):rr;
	}
})({});
console.log("#015 Trash Can model",["123456","english"].filter(is("alphabet")));//Data Trash(Problems)
//#015 add a decision Maker
var is = (function(rr){
	rr['number'] = /^[0-9]+$/;//Definition Trash(Decision Makers)
	return is;
})(is());
console.log("#015 Trash Can model",["123456","english"].filter(is("number")));//Data Trash(Problems)


console.log(
[1,2,3,4].map(function(c,i,a){
	  return [1,2,3,4].map(
	  	function(cc,ii,aa){
	  		return [c,cc].join(':');
	  		}
	  	);
}).join('\n')
);

console.log(
	(function(i){
		return (0).toString().repeat(i).split('').map(function(cc,ii,aa){
			return i
		})
	})(5)
);


//#014_002 function's functions, head/body model 
(function(s){
	console.log("#014_002",s);
})(
	(function(j){//head call
		var a=[];
		f= (function(i){//body,tail call
		a=	a.concat(function(i){
				return (0).toString().repeat(i).split('').map(function(cc,ii,aa){
					return i
				})
			});
			return (i)?f:a;
		});
		return f;
	})(5)(4)//body
	()//tail
);
//mapのmapを作る


String.prototype.f=function(i){
	return this+'x';
};

console.log(
'123'.f().f().f()
);

Array.prototype.f=function(i){
    this.push(i);
    return this;
};
console.log(
	[].f(1).f(2).f(3).f(4).join('').repeat(5).match(/./g).map(
		function(c){
			return c.match(/./).join('');
		}).join('').indexOf('4').toString().repeat(10).split('').map(
			function(c,i,a){
				return [c+i,':',a[i].repeat(i)].join('')
			})
	)
a=/a/img;
a['t']=123;

console.log(a);

i=/[0-3][0-9]/;
console.log(i.toString().match(/(([0-9])[-]([0-9]))/));



console.log(Math.floor(Math.random()*6)+1)

console.log(
	[Math.random,Math.floor].reduce(
		function(p,c,i){
			console.log(i,p,c);
	return c.apply(this,[p.apply()*10]);
})

);


d=/[:dice:]/;

plus =function(){
	
};
[1,Math.random,plus(6),Math.floor]

console.log(
function(h){
(function(s){
	//hero
	h['role']=s;
	var i=0;
	var f =function(s){
		    i++;
		    h['role']['ability'+i]=s+'';
		    return f;
	}
	return f;
})(/fighter/)(/good/)(/str+18/)(/dagger/)();
return h;
}({})
);

//**********class
var User = function(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype={
	f:function(){
		this.name=this.name+"*"
		return this
	}
};
var usr = new User('name', 10);
console.log( usr.f().f().f().f().name);


console.log(
["table",["tr",["td"]]].map(function(c){return "<"+(c['map']?c.map(function(cc){
	return "["+cc+"]";
}):"{"+c+"}")+">"})
);


console.log(
["table",["tr",["td"]]].reduce(function(p,c,i,a){
	return "<"+p+">"+c+"</"+p+">";
}));




var f = function(p,c,i,a){
	return "<"+p+">"+(c.reduce?c.reduce(f):c)+"</"+p+">";
};
console.log("re",
["table",
	["tr",
		["td","aaaaaa"],
	]
].reduce(f)
);


var f = function(p,c,i,a){
	return "<"+p+">"+(c.reduce?c.reduceRight(f):c)+"</"+p+">";
};
console.log("re",
["table",
	["tr",
		["td","aaaaaa"],
	]
].reduceRight(f)
);

Array.prototype.uniq = function() {
	var storage = {};
	var uniqueArray = [];
	var i,value;
	for ( i=0; i<this.length; i++) {
   		value = this[i];
      	if (!(value in storage)) {
       		storage[value] = true;
         	uniqueArray.push(value);
       	}
   	}
   	return uniqueArray;
};
Array.prototype.uniq.test = function() {
	return [1,2,3,4,5,1,2,3,4,5].uniq();
}
console.log(
	Array.prototype.uniq.test()
);

console.log(
	(function(a){//uniq
		var storage = {};
		var uniqueArray = [];
		var i,value;
		for ( i=0; i<a.length; i++) {
	   		value = a[i];
	      	if (!(value in storage)) {
	       		storage[value] = true;
	         	uniqueArray.push(value);
	       	}
	   	}
	   	return uniqueArray;
	})([1,2,3,4,5,1,2,3,4,5])
);


console.log("uniqueArray",
	(function(a){//uniqueArray
		var ss = {};
		var uniqueArray = [];
		a.map(function(c,i,a){
	      	if (!(c in ss)) {
	       		ss[c] = true;
	         	uniqueArray.push(c);
	       	}
	    });
	   	return uniqueArray;
	})([1,2,3,4,5,1,2,3,4,5])
);


console.log("uniqueArray/filter",
	(function(a){//uniqueArray
		var ss = {};
		return a.filter(function(c,i,a){
	      	if (!(c in ss)) {
	       		ss[c] = true;
	         	return true;
	       	}else{
	       		return false
	       	}
	    });
	})([1,2,3,4,5,1,2,3,4,5])
);


aa={};
aa['help']='help';
console.log("mem",
	(function(s){//uniqueArray
		a=[];
		var f= function(c){
			a=(c)?a.concat(c[s]):a;
			return (c)?f:a;
		}
		return f;
	})("help")(aa)(aa)(aa)(aa)()
);
console.log("r",
(function(R){
	return R;
})(this.Rphael)
)

console.log(
(function(a){return a[Math.floor(Math.random() * a.length)]})(["red","blue","yellow"])
);


console.log(
Object.prototype.toString.call("").slice(8, -1)
);

console.log(
Object["prototype"]["toString"]["call"]("")["slice"](8, -1)
);

console.log("try",
	["prototype"]["toString"]["call"]("")["slice"](8, -1)
)


console.log(
Object["prototype"]["toString"]["call"]("")["slice"](8, -1)

);

console.log("try3",
(function(){
	var f = ["prototype"]["toString"];
	return f.call(/regexp/)["slice"](8, -1);
	
	//var abc = function(){ return ["prototype"]["toString"]};
	//return abc().call(/re/)["slice"](8, -1)
})()
);

console.log(

(function(o){
	var f = function(c){
		o=(o[c])?o[c]:o; return (c)?f:o;
	}
	return f;
})
(Object)
("prototype")
("toString")

);




var r={};
rrr=[r,"a","b","c"].reduce(function(p,c,i,a){
	p[c]=p;
	return p;
});
console.log(rrr);


var r={};
rrr=["a","b","c","d","e"].reduce(function(p,c,i,a){
	var a={};
	a[c]=p;
	return a;
});
console.log("moc",rrr);

var r={};
r["a"]={};
r["a"]["b"]={};
r["a"]["b"]["c"]={};
console.log("r1",r);
//a[1][1][2]
a=r["a"]={};
a["b"]={};
b={};
b["c"]=a
//r["a"]["b"]["c"]={};
console.log("r2",b);

rrr=["a","b","c","d","e"].reduceRight(function(p,c,i,a){
	var a={};
	a[c]=p;
	return a;
});
console.log("rrr_r",rrr);
console.log("rrr_r",rrr["a"]["b"]["c"]["d"]);



//#014_001 closure cascading
(function(j){
	console.log("014_001 head",j);
	var f = (function(i){
		j=j+i;
		console.log("014_001 body",j);
		return f;
	});
	return f;
})(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1);
