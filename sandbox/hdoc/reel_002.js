//backtick

var a = 5;
var b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."


//methodMissing in javascript
//https://qiita.com/hokaccha/items/3a3ea6180e94e70bc335
//methodMissing in javascript
var obj = new Proxy({
  methodMissing(name) {
    return () => `${name} does not exist`;
  }
}, {//handler
  get(target, name) {
    if (name in target) {
      return target[name];
    }
    if (typeof target.methodMissing === 'function') {
      return target.methodMissing(name);
    }
  }});
console.log(obj.foo()); 
console.log(obj["boo"]());



//methodMissing in javascript
//https://qiita.com/hokaccha/items/3a3ea6180e94e70bc335
//methodMissing in javascript
var obj = new Proxy({
  methodMissing(name) {
    return () => `${name} does not exist`;
  }
}, {//handler
  get(target, name) {
    if (name in target) {
      return target[name];
    }
    if (typeof target.methodMissing === 'function') {
      return target.methodMissing(name);
    }
  }});
console.log(obj.foo()); 
console.log(obj["boo"]());  



//methodMissing meets clousure cascading
//https://qiita.com/hokaccha/items/3a3ea6180e94e70bc335
(function(){
	var obj = new Proxy({
	  methodMissing(name) {
	    return () => `${name} does not exist`;
	  }
	}, {//handler
	  get(target, name) {
	    if (name in target) {
	      return target[name];
	    }
	    if (typeof target.methodMissing === 'function') {
	      return target.methodMissing(name);
	    }
	}});
	var f=function(s){
		console.log(obj[s]());  
		return f;
	};
	return f
})()("this")("is")("a")("pen");


//methodMissing meets clousure cascading
//https://qiita.com/hokaccha/items/3a3ea6180e94e70bc335
(function(){
	var obj = new Proxy({
	  methodMissing(name) {
	    this[name] = function(){return name};//gnererate missing method
	    return this[name];
	  }
	}, {//handler
	  get(target, name) {
	    if (name in target) {
	      return target[name];
	    }
	    if (typeof target.methodMissing === 'function') {
	      return target.methodMissing(name);
	    }
	}});
	var f=function(s){
		console.log(obj[s]());  
		return f;
	};
	return f
})()("this")("is")("a")("pen");



//methodMissing meets clousure cascading
//https://qiita.com/hokaccha/items/3a3ea6180e94e70bc335
(function(){
	var obj = new Proxy({
	  methodMissing(name) {
	  	console.log("*");
	    return this[name]=function(){return name};
	  }
	}, {//handler
	  get(target, name) {
	    return (name in target) ? target[name] : 
	    (typeof target.methodMissing === 'function') ? target.methodMissing(name): 
	    null;
	}});
	var f=function(s){
		console.log(obj[s]());  
		return f;
	};
	return f
})()("this")
		("is")
			("a")
				("pen")("is")("this")("a")("pencil?");
