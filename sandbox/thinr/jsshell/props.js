Object.prototype.props = function (){
	var as = [[], [], []];
	var b =[];
	var p, j, i;
	var protoLevels = 0;
	for (p = this; p; p = p.__proto__){
		for (i=0; i<3; ++i)
    		as[i][protoLevels] = [];
  			++protoLevels;
 		}
 		
		for(var a in this){
  			var protoLevel = -1;
  			try{
				for (p = this; p && (a in p); p = p.__proto__)
      				++protoLevel;
  			}catch(er) { protoLevel = 0; }

  			var type = 1;
  			try{
    			if ((typeof this[a]) == "function")
      				type = 0;
  			}catch (er) { type = 2; }
//  			as[type][protoLevel].push(a);
//  			as[type][protoLevel].push(type + ":" + protoLevel +  ":"+ a);
				b.push(a);
		}
//	return as;
	return b;
};
