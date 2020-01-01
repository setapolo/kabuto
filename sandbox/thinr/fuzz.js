//Fuxzz Test data generator
Array.prototype.ascii_codes = function(){//test code
	return (255).times(function(i){return String.fromCharCode(i);})
}
Array.prototype.ascii_codes.test = function(){//test code
	//characters that can be used for javascript identifer
	return [].ascii_codes().join("").match(/[a-zA-Z$_]/g);
}
String.prototype.test = function(){return "abcdefg"}
Number.prototype.rand = function(){return Math.floor(Math.random()*(this.valueOf()));};
Number.prototype.times = function(c){
a=[];
	for (var i = 1; i < this.valueOf() + 1; i++) {
        a.push(c(i));
    };
	return a;
};

//fuzz data generator
_fuzz=function(){};
_fuzz.prototype = {
	__a:[],
	dump:function(){ss=this.__a.join("");this.__a=[];return ss;}
};
fuzz = new _fuzz;
_fuzz.prototype.array = function(){
	return (10).times(function(){return (10).rand();});
}
Array.prototype.fuzz=function(){//test code
	return (10).times(function(){return (10).rand();});
}

