String.prototype.cat=function(){
	return String.concat(this.toString(),arguments[0].toString());	
};

String.prototype.load = function() {
  var s = _win.document.createElement("script");
  s.type = "text/javascript";
  s.src = this;
   try{
	window.document.getElementsByTagName("head")[0].appendChild(s);
   }catch(er){
   }
};


String.prototype.enc=function(){
	return encodeURIComponent(this);
};
String.prototype.enc.test=function(){
	return "a b=cdefg".enc();
}
String.prototype.dec=function(){
	return decodeURIComponent(this);
};
String.prototype.dec.test=function(){
	return "a b=cdefg".enc().dec();
}


String.prototype.escapeHTML=function(){
    return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
};
String.prototype.unescapeHTML=function(){
	String.prototype.stripTags=function(){
    	return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, '');
  	};
    return this.stripTags().replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
};









