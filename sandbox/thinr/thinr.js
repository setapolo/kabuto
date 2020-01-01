x_debug=0;
y_debug=0;
//each
Array.prototype.each =   function(c){var _a=[];for (var i=0; i<this.length       ;++i){_a[i]=c.call(this[i],i);} return _a;};
Array.prototype.each_i = function(c){var _a=[];for (var i=0; i<this.length       ;++i){_a[i]=c.call(this[i],i);} return _a;};

kvs=function(){return function(i){return i + ":" +this.toString()}};
Array.prototype.only = function(c){
	return this.filter(function(element, index, array){
		console.log(element);
		return element == c? true : false;
	});
};




//times
Number.prototype.times = function(c){var _a=[];for (var i=1; i<this.valueOf() + 1;++i){        _a.push(c(i));};return _a;};

Number.prototype.sqrt = function(){return Math.sqrt(this)}
Number.prototype.pow2 = function(){return Math.pow(this,2)}
Number.prototype.add = function(c){return this+c}

Number.prototype.px = function(){return x_debug=this}
Number.prototype.py = function(){return y_debug=this}


String.prototype.get = function(c){return c['get_'+this]()}
String.prototype.evl = function(c){return c[this]()}


//rand
Number.prototype.rand = function(){return Math.floor(Math.random()*(this.valueOf()));};
Array.prototype.rand = function(){return this[Math.floor(Math.random()*(this.length))];};
//find
Array.prototype.find = function(c){
	var _a=[];
	for (var i=0; i<this.length       ;++i){
		if (this[i].to_s().match(c)){
			_a.push(this[i]);
		}
	}
	return _a;
};



String.prototype.mem=function(c){return c[this];}

//pushin/popout
Object.prototype.typeOf=function(){return typeof this;}
Object.prototype.pushin=function(a){a.push(this);return this;};
Object.prototype.popout=function(a){//being reviewed
    for(var i=0; i<a.length; i++) {
        if(a[i] == this) {
            a.splice(i, 1);
            break;
        }
    }
	return this;
};

String.prototype.eval=function(){
	return eval(this.toString());
};
Object.prototype.to_s=function(){return this.toString()}


//Syntactic sugar--$
Object.prototype.$=function(){
 if(arguments.length>0)
  return document.getElementById(arguments[0]);
 else
  return document.getElementById(this.toString());
};

//cookie
String.prototype.setCookie=function(){
	document.cookie=this;
	return this;
}
String.prototype.getCookie=function(){
	return document.cookie;
}

String.prototype.include=function(array){
		var len;
		if ( array ) {
			len = array.length;
			for (i=0 ; i < len; i++ ) {
				if (array[ i ] == this ) {
					return array[ i ];
				}
			}
		}
		return null;
	}
String.prototype.include.test=function(){
	return "circle".include(["ellipse","circle"])? 1 : 2;
}


Array.prototype.include=function( elem,  i ) {
		var len;
		if ( this ) {
			len = this.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;
			for ( ; i < len; i++ ) {
		// Skip accessing in sparse arrays
				if ( i in this && this[ i ] === elem ) {
					return this[ i ];
				}
			}
		}
		return null;
	}
Array.prototype.include.test=function(){
	return ["ellipse","circle"].include("circl")? 1 : 2;
}
