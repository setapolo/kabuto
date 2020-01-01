function PetitSAX(){};
PetitSAX.prototype ={
	startElement : function(str){
	return "[~"+str+"]";
	},
	endElement : function(str){
	return "[|"+str+"]";
	}
};
//"<xml><test attr=a>text</test><hoge><foo></foo><bar></bar></hoge></xml>".sax()

String.prototype.sax=function(){
    replacer = function(sax){
		return function(str, offset, xml){
			if(str.charAt(1) != '/'){
				return sax.startElement(str);
			}else{
				return sax.endElement(str);
			}
		}
	};
	return this.replace(/<.+?>/g, replacer(new PetitSAX));
}
//[[10,10],[20,20],[30,30],[40,40]].each(function(){return this[0]+"-"+this[1]})
//[[100,100],[200,200],[300,300],[400,400]].each(function(){return g.circle(this[0],this[1],10).attr({fill:"white"})})
//(10).times{[].push([10,10])}
//abc.node.props().toString().split(/,/).each(function(){return this.match(/.*[Xx].*/)}) 
//"http://www.ekidata.jp/api/l/11302.json".load()
//'{"station_cd":1130201,"station_g_cd":1130201,"station_name":"���","lon":139.728439,"lat":35.619772}'.split(/,/).each(function(){return this.split(/:/)[0]}).each(function(){return "this["+this+"];" }).join("<br>").p()
//xml.data["station_l"].each(function(){return this['station_name'];})
//xml.data["station_l"].each(function(){_a=[]; _a.push(this["station_cd"]);_a.push(this["station_g_cd"]);_a.push(this["station_name"]);_a.push(this["lon"]);_a.push(this["lat"]); return _a;})
//xml.data["station_l"].each(function(){_a=[]; _a.push(this["station_cd"]);_a.push(this["station_g_cd"]);_a.push(this["station_name"]);_a.push(this["lon"]);_a.push(this["lat"]); return _a;}).toTable().p()
//http://www.webtoolkit.info/javascript-base64.html


