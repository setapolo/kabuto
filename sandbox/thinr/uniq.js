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