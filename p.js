//be a good parts

//# p_001_001
Object.prototype.p=function(){
	console.log(""+this);
};
"abcdefg"
//["a","b","c","d"]
.p();

//# p_001_002
Object.prototype.p=function(s){
	console.log(""+this);
};
//"abcdefg"
["a","b","c","d"]
.p();

//# p_002_001
Object.prototype.p=function(s){
	s=(s)?s+":":""; 
	console.log(s+this);
};
//"abcdefg"
["a","b","c","d"]
.p("label");


//# p_003_00xx
Object.prototype.p=function(s){
	s=(s)?s:(function(s){
			console.log(""+s);
			return s;
	})(this);
	return this+s;	
};
"abcdefg"
//["a","b","c","d"]
.p("label").p(":").p();






