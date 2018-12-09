//#003_005 Nan trail, reduplication
(function(s){
	console.log("003_005",s);
})(
	(function(s){
	  return (!isNaN(parseInt(s))) ? parseInt(s):null;		
	//})("1234");
	//})(null);
	//})(1234);
	})("one")
)
;



//#003_006 Nan trail 
(function(s){
	console.log("003_006",s);
})(
	(function(j){
		return !isNaN(j)?j:null;
	})(
		parseInt('one')
	)
)
;