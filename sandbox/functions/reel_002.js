" ".repeat(10).split("").map(function(c,i,a){
	console.log(i);
	return i;
})

console.log(
" ".repeat(360).split("").map(function(c,i,a){
	console.log("i:",i);
	console.log("cos:",Math.floor(Math.cos(i*Math.PI/180)*100+100));
	console.log("sin:",Math.floor(Math.sin(i*Math.PI/180)*100+100));
	var x = Math.floor(Math.cos(i*Math.PI/180)*100+100);
	var y = Math.floor(Math.sin(i*Math.PI/180)*100+100);
	return [x,y];
})
);