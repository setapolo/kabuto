


Object.prototype.dispatch=function(f){//test code
	setTimeout(f, 0);
}
Object.prototype.affects=[];//test code
Object.prototype.affect=function(c){//test code
	this.affects.each(function(){
		setTimeout(this.fire(c), 0);
		return this.affect(c)
	});
	return this;
};
Object.prototype.fire=function(c){//test code
	return this.effect();
};
Object.prototype.effect=function(c){//test code
	return this.animate({"fill-opacity": .4}, 500);
}


//sequences
Number.prototype.times = function(c){
a=[];
	for (var i = 1; i < this.valueOf() + 1; i++) {
        a.push(c(i));
    };
	return a;
};

HTMLTextAreaElement.prototype.cat=function(s){//test code
	this.value = this.value + s;
	return this;
}
Array.prototype.sin=function(){//test code
	return (10).times(function(i){return [i*30,Math.round(Math.sin((i*36) * (Math.PI / 180))*30)+90]});
}
Array.prototype.liner=function(){//test code
	return (10).times(function(i){return [i*30,i*30]})
}
Array.prototype.circle=function(){//test code
	return (10).times(function(i){return [Math.round(Math.cos((i*36) * (Math.PI / 180))*30)+90,Math.round(Math.sin((i*36) * (Math.PI / 180))*30)+90]});
}
Array.prototype.lissajous=function(){//test code
	return (60).times(function(i){return [Math.round(Math.sin(i*50)*90+100),Math.round(Math.sin(i*100)*90+100)]});
}
Array.prototype.fibonacci=function(){//test code
	return (10).times(function(n) {
		if(0 == n) {return 0;}
		var i, n1 = 1, n2 = 1, result = 1;
		for(i = 3; i <= n; i++) {
			result = n1 + n2;
			n2 = n1;
			n1 = result;
		}
		return result;
	})
}



String.prototype.to_reg = function(){//test code
	return new RegExp(this,"g");
}
String.prototype.to_reg.test = function(){//test code
	javascript_identifier="[a-zA-Z$_]";
	return javascript_identifier.to_reg();
}


//[1,2,3].each(function(){return this.to_s().img()})
func = function(){return this.to_s().img()}
Array.prototype.each.test=function(){
	return [1,2,3].each(func);
}


Array.prototype.grep= function(reg){//test code
	Array.prototype.each_if = function(c) {
		var _a=[];
		for (var i=0; i<this.length; ++i){
			if (c.call(this[i])){
				_a.push(this[i]);
			}
		} 
		return _a;
	};
	String.prototype.test=function(reg){return reg.test(this);}
	return this.each_if(function(){return this.test(reg)})
}

Array.prototype.grep.test= function(){//test code
	return ["abc","efg","hija"].grep(/a/);
}

//quadrisect double split
String.prototype.quadrisect=function(a,b){
	var ba = Array.prototype.each;
	Array.prototype.each = function(c) {var _a=[];for (var i=0; i<this.length; ++i){_a[i]=c.call(this[i]);} return _a;};
	_b =this.split(a).each(function(){return this.split(b);});
	Array.prototype.each = ba;
	return _b;
};
String.prototype.quadrisect.test=function(){
	return "a-b-c;e-f-g;h-i-j".quadrisect(/;/,/-/);
}
//csv processing using quadrisect 
String.prototype.csv=function(){
	return this.quadrisect(/\n/,/,/);
}
String.prototype.csv.test=function(){
	return "a,b,c\ne,f,g\nh,i,j".quadrisect(/\n/,/,/);
}

Array.prototype.rotate=function(){//test code
	return [];
}


//conjugation double join
Array.prototype.conjugation=function(a,b,c){
	Array.prototype.each = function(c) {var _a=[];for (var i=0; i<this.length; ++i){_a[i]=c.call(this[i]);} return _a;};
	return this.each(function(){return eval(a) + this.each(function(){return eval(b)})+ eval(c)});
};
Array.prototype.conjugation.test=function(){
	return [["a", "b", "c"], ["e", "f", "g"],["h","i", "j"]].conjugation("''","this+','","'\\\n'");
}

Array.prototype.csv=function(){
	return this.join(",");
}

Array.prototype.csv.test=function(){
	return [[1],[2],[3],[4],[5]].csv();
}

rray.prototype.even=function(){//test code
	return [2,4,6,8,10,12]
}



