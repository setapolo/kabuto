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
    (1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(1);

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
(function(a){
	var j=0;
	console.log("014_006 top",a);
	var f = (function(i){
		console.log("014_006 head",a);
		var ff = function(ii){
			return (ii)?tt(ii):f//tail as false case;
		}
		var tt = function(iii){
			a[j]=j+iii;
			j++;
			console.log("014_006 body",a);
			return ff;
		}
		return tt(i);
	});
	return f;
})([])
    (1)(1)(1)()
    (1)(1)()
 (1)(1)(1)(1)()
    (1)(1)(1)()
    (1)(1)()
    (1)(1)()(1)(1)(1);


//#014_007 arrrray / 2d array 
(function(a,j){
	j=j || -1;
	console.log("014_007 top",a);
	var f = (function(i,jj){
		jj=jj || 0;
		j=j+1;
		a[j]=[]
		console.log("014_007 head",a);
		var ff = function(ii){
			return (ii)?tt(ii):f//tail as false case;
		}
		var tt = function(iii){
			a[j][jj]=jj+iii;
			jj++;
			console.log("014_007 body",a);
			return ff;
		}
		return tt(i);
	});
	return f;
})([])
    (1)(1)(1)(1)()
    (1)(1)(1)(1)()
    (1)(1)(1)(1)()
    (1)(1)(1)(1)()
;

//#014_001_02 closure cascading meets method cascading ***Face hugger#2***
var pp=function(j){
	console.log("014_001_02 head",j);
	var f = (function(i){
		console.log("014_001_02 body",i);
		return f;
	});
	return f;
};
pp.
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
				call(this,5);

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

//cc into mc
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
	({		split:function(s){return this.split(s); },
			slice:function(s){return this.slice(s); }
	})
	(
	`
Tyger! Tyger! burning bright
In the forests of the night,
What immortal hand or eye
Could frame thy fearful symmetry?
	`
	)("split",[/\n/])("slice",[1,-1])
)

