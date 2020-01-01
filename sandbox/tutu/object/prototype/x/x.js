//Object.prototype.x
//http://www.suiyokai.org/tutu/object/prototype/x/
Array.prototype.each = function(c){var _a=[];for (var i=0; i<this.length;++i){_a[i]=c.call(this[i],i);} return _a;};
Object.prototype.x=function(c){
	var type = Object.prototype.toString.call(c).slice(8, -1); 
	var type2 = Object.prototype.toString.call(this).slice(8, -1); 
    if(type2 == 'Undefined'){
        return [this];
    }else if (type2 == 'Function'){
        return [this];
    }else if (type2 == 'Array'){
		if (type  == 'Array'){
			return this.each(function(){
				var cc=this;
				return c.each(function(){
					var type3 = Object.prototype.toString.call(cc).slice(8, -1); 
					var type4 = Object.prototype.toString.call(this).slice(8, -1); 
					if (type3 == 'Number'){
						return [cc*this]
					}else{
						return [this+cc]
					}
			})});
		}else{
			var a=[];
			a=this;
			a.push(c);
			return a;
		}
	}else if (type2 == 'String'){
		return this.match(/./g);
    }else if (type2 == 'Boolean'){
        return [this];
    }else if (type2 == 'Object'){
        return [this];
    }else if (type2 == 'RegExp'){
		var s ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var a=[];
		if (s.match(this)){
			while(a.length < c){
				var r = Math.floor(Math.random() * (s.match(/./g).length-1))+1;
				var ch = s.match(/./g)[r];
				if (ch.match(this)){
					a.push(ch);
				}else{
				}
			}
			return a
		}else{
			return [""];
		}
    }else if (type2 == 'Number'){
		var n=Math.min(this,c);
		var m=Math.max(this,c);
		var a=[];
		for (var i=n;i<=m;i++){
			a.push(i);
		}
		return a;
    }else{
        return [this];
    }

};