Object.prototype.p=function(){
	console.log(""+this)
};
(function(){
/*
One mis-feature that is often used is to extend Object.prototype or one of the other built in prototypes.

This technique is called monkey patching and breaks encapsulation. While used by popular frameworks such as Prototype, there is still no good reason for cluttering built-in types with additional non-standard functionality.

http://bonsaiden.github.io/JavaScript-Garden/#object.prototype
*/	
}).p();
