//transpose
HTMLCollection.prototype.each = function(c) {var _a=[];for (var i=0; i<this.length; ++i){_a[i]=c.call(this[i]);} return _a;};
HTMLTableElement.prototype.transpose = function(){
	this.rows.each(function(){return this.cells});
	return this.rows.length;
}

