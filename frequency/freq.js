//https://en.wikipedia.org/wiki/Frequency
//poc#1
var k,s1,s2;
s1 = Date.now();
for (var i=0;i<100000000;i++){
	k=i*2;
}
s2 = Date.now();
console.log("sec1",s2-s1);

//poc#2
(function(s){
	console.log("sec2",s)
})(
(function(){
	var k,s1,s2;
	s1 = Date.now();
	for (var i=0;i<100000000;i++){
		k=i*2;
	}
	s2 = Date.now();
	return s2-s1;	
})()
);
