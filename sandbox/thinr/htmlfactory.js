$$=$("body");

//html controller
HTMLElement.prototype.on=function(){
	this.style.display = "block";
	return this;
}
HTMLElement.prototype.on.test=function(){
	$("output").style.display = "block";
	return this;
}

HTMLElement.prototype.off=function(){
	this.style.display = "none";
	return this;
}
HTMLElement.prototype.off.test=function(){
	$("output").style.display = "none";
	return this;
}

//html tags implementation
Array.prototype.toSelect=function(){
	Array.prototype.each =   function(c) {var _a=[];for (var i=0; i<this.length; ++i){_a[i]=c.call(this[i]);} return _a;};
	return "<select id='a' class='text' style='width:180px;'>"+this.each(function(){return "<option value='"+this+"'>"+this+"</option>"; }).join("")+"</select>";
};
Array.prototype.toSelect.test=function(){
	return ["abc","efg","hij","lmn","opq"].toSelect().p();
};


Array.prototype.toTable=function(){
	Array.prototype.each = function(c) {var _a=[];for (var i=0; i<this.length; ++i){_a[i]=c.call(this[i]);} return _a;}
	return "<table border=1 id='m'>"+this.each(function(){return "<tr>"+this.each.call(this,function(){return "<td>"+this+"</td>";}).join("")+"</tr>";}).join("")+"</table>"; 
};
Array.prototype.toTable.test=function(){
	return [[1,2],[3,4],[4,5],[5,6],[1,7]].toTable();
};


//html for String
String.prototype.left=function(){
	return String.concat(arguments[0].toString(),this.toString());	
};
String.prototype.left.sample='"item".left("<li>")';

String.prototype.right=function(){
	return String.concat(this.toString(),arguments[0].toString());	
};
String.prototype.right.sample='"item".left("<br>")';

String.prototype.iframe=function(){
 return "<iframe src='" + this + "'></iframe>";	
};


String.prototype.img=function(){
return "<img src='" + this + "'>"
};
String.prototype.img.test=function(){
	return "https://bitbucket-assetroot.s3.amazonaws.com/c/photos/2012/Mar/15/thinr-logo-2394259519-1_avatar.jpg".img().p();
}

turtle="".img.test;


String.prototype.downloadlink=function(){
return this+"link".link("data:application/octet-stream,"+this);
};
String.prototype.href=function(){
return "<A HREF='"+this+"'>"+((arguments[0]) ? arguments[0]:"link") +"</A>"
};

String.prototype.to_html =function(){var newdiv = document.createElement('div');newdiv.innerHTML=this;return newdiv.firstChild;};
HTMLElement.prototype.addAttribute=function(){this.setAttribute(arguments[0][0],arguments[0][1]);return this;}
String.prototype.innerHTML =function(){
	var newdiv = document.createElement("div");
    newdiv.innerHTML=this;
    return newdiv.firstChild;
};

//