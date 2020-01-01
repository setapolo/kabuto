code=function(){};
code.prototype = {
	__a:[],
	dump:function(){ss=this.__a.join("");this.__a=[];return ss;}

};
ruby = new code;
thinr = new code;
helloworld='__helloworld';
func='__fucntion';
ruby[helloworld]="puts 'hello world!'";
thinr[helloworld]="'hello world!'.p()";
ruby[func]="def name \n code \n end";
thinr[func]="name = function(){}";


code.prototype.helloworld = function(){
	this.__a.push(this[helloworld]);
	return this;
}

code.prototype.add_func = function(){
	this.__a.push(this[func]);
	return this;
}


Array.prototype.head = function(s){
	this.unshift(s);
	return this;
}
Array.prototype.tail = function(s){
	this.push(s);
	return this;
}
Array.prototype.c = function(s){
	this.push(s);
	return this;
}



Array.prototype.each.part = function(){
	return [[].c('case ').c(this).c(':').join('')].c('break;').join('<BR>');
}
Array.prototype.branch = function(){
	return this.each([].each.part).head("switch(i){").tail("}");
}
Array.prototype.branch.test = function(){
	return [1,2,3].branch().join("<BR>").p();
}
