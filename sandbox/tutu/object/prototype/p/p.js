Array.prototype.each = function(c){var _a=[];for (var i=0; i<this.length;++i){_a[i]=c.call(this[i],i);} return _a;};
typeNameOf = function(c){
	return Object.prototype.toString.call(c).slice(8, -1);
}
Object.prototype.p=function(c){
	var _typeNameOf_c = typeNameOf(c);
	var _typeNameOf_this = typeNameOf(this);

	if(_typeNameOf_c == 'Undefined'){
        return this;
    }else if (_typeNameOf_c == 'Function'){
		var s=c.call(this,this+'');
		var e=document.createElement("div");
		e.innerHTML=s.toString();
		document['body'].appendChild(e);
		return this;
    }else if (_typeNameOf_c == 'Array'){
        return this;
    }else if (_typeNameOf_c == 'String'){
		if (c == 'canvas'){
			var e=document.createElement("canvas");
			e.width="240";
			e.height="140";
			var e2 = e.getContext('2d');
			e2.clearRect(0,0,240,140);
			e2.strokeStyle='rgb(00,00,255)';	
			if (_typeNameOf_this == 'Array'){
				this.each(
					function(i){
						e2.beginPath();
						if (typeof this[0]=='undefined'){
							var x =((i+0)*10)+10;
							var y =this+0;
						}else{
							var x =this[0]+0;
							var y =this[1]+0;
						}
						e2.arc(x, y, 1, 0, Math.PI*2, false);
						e2.closePath();
						e2.stroke();
				}
				);
			}else{
				e2.font="30px Arial";
				e2.fillText(this+'',10,50);
			}
			document['body'].appendChild(e);
		}else{
			var e=document.createElement(c+'');
			var e2=document.createTextNode(this+'');
			e.appendChild(e2);
			document['body'].appendChild(e);
		}
		return this;
    }else if (_typeNameOf_c == 'Boolean'){
        return this;
    }else if (_typeNameOf_c == 'Object'){
		console.log(c['_p'].call(this,this));
		console.log(this);
		var e=document.createElement("div");
		e.innerHTML=c['_p'].call(this,this).toString().replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<BR>');
		document['body'].appendChild(e);
		return this;
    }else if (_typeNameOf_c == 'RegExp'){
        return this;
    }else if (_typeNameOf_c == 'Number'){
        return this;
    }else if (_typeNameOf_c == 'Window'){
		window.alert(this+'');
		return this;
	}else if (_typeNameOf_c =="HTMLDocument"){
		if(_typeNameOf_this == 'Array'){
			var e=c.createElement("table");
			this.each(function(){
				var e2=c.createElement("tr");
				e.appendChild(e2);
				var e3=c.createElement("td");
				e3.innerHTML=this.toString();
				e2.appendChild(e3);
				}
			);
			c['body'].appendChild(e);
		}else if(_typeNameOf_this == 'String'){
			var e=c.createElement("div");
			e.innerHTML=this.toString().replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<BR>');
			c['body'].appendChild(e);
		}else{
			c['body'].appendChild(this);
		}
		return this;
	}else{
        return this;
    }
};