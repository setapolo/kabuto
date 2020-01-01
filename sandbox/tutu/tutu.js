Array.prototype.each = function(c){var _a=[];for (var i=0; i<this.length;++i){_a[i]=c.call(this[i]);} return _a;};
Array.prototype.each = function(c){var _a=[];for (var i=0; i<this.length;++i){_a[i]=c.call(this[i]);} return _a;};
Array.prototype.x=function(f){
    return this.each(f);
};
fcc=function(){return String.fromCharCode(this);};
(0).x(255).x(fcc);


Number.prototype.x=function(n){
    var a=[];
    for (var i = this+0; i<n+1; i++){
        a.push(i);
    }
    return a;
};
Array.prototype.is=function(s){
    window[s]=this;
    return s+'';
};
String.prototype.as = function(){
    return [this,'=','[',window[this],'];'];
};
String.prototype.y=function(a){a.push(this)};

[].is('keygroup');
(65).x(90).is('alphabet_keys').y(keygroup);
(48).x(57).is('number_keys').y(keygroup);
(96).x(111).is('ten_keys').y(keygroup);
(112).x(123).is('function_keys').y(keygroup);
p=function(){console.log(this+'')}
as=function(){return this.as().join('')}

keygroup.x(as).join('');

Array.prototype._=function(s){
	if (typeof s == "string"){
		this.push(s);
		return this;
	}else if(typeof s == "function"){
		return s.apply(this);
	}else{
		return this.join("\n");
	}
};
String.prototype.insert=function(s){
	return s.concat(this);
}
String.prototype.p=function(){
	console.log(this.toString());
	return this;
};
Array.prototype.p=function(){
	return this.each(function(){return this.p()})
};
Array.prototype.replace=function(reg,s){
	return this.each(function(){return this.replace(reg,s)});
};
Array.prototype.concat=function(s){
	return this.each(function(){return this.concat(s)});
};
Array.prototype.insert=function(s){
	return this.each(function(){return this.insert(s)});
};
String.prototype.car=function(){return this.split(",").shift()}
String.prototype.cdr=function(){return this.split(/,/).slice(1).join("")}
Array.prototype.car=function(){
	return this.each(function(){return this.car()});
};
Array.prototype.cdr=function(){
	return this.each(function(){return this});
};
json=function(s){
  return function(){ 
  var script  = document.createElement('script');
  script.type = 'text/javascript'; 
  script.src  = s;
  document.body.appendChild(script);
  };
};

s=[];
s._(json('https://bitbucket.org/xargs/thinr/raw/1ce7ea1f23c0fc64ee513a080f6ae6b8827a7a55/tutu/test.json'));

s.car()._().p();


_numbers=function(f){
    return function(c){
        var _a=[];
        if (typeof c == 'undefined'){
            c=10;
        }
        for (var i=0;i<c;i++){
            _a.push(f.apply());
        }
        return _a;
    }
};

_strings=function(f){
    return function(c){
        var _a=[];
        if (typeof c == 'undefined'){
            c=10;
        }
        for (var i=0;i<c;i++){
            _a.push(f.apply().toString(16));
        }
        return _a;
    }
};


y_eq=function(f){
    return function(c){
        var _a=[];
        if (typeof c == 'undefined'){
            c=10;
        }
        for (var i=0;i<c;i++){
            _a.push(f.call(this,i));
        }
        return _a;
    }
};



Function.prototype.x=function(c){
        if (typeof c == 'undefined'){
            c=10;
        }

     return this.call(this,c);
};
decimal=function(){ return Math.round(Math.random()*9)};
hex=function(){ return Math.round(Math.random()*15)};
byte=function(){ return Math.round(Math.random()*255)};
atoz=function(){ return String.fromCharCode(Math.round(Math.random()*(122-97)+97))};
//AtoZ=function(){ return String.fromCharCode(Math.round(Math.random()*(90-65)+65))};
ax=function(c){return function(i){return c*i}};
//_numbers(byte)._();
//_strings(hex)._();
//_strings(byte)._(20).join("");
//_strings(atoz)._().join('');
//_strings(AtoZ)._(30).join('');
//y_eq(ax(2)).x(100);
_count_=function(f,t){
    if (typeof t == 'undefined'){
        t=1000;
    }
    return function(i){
    //    ff= (function(){
    //        g.call(f,i,t).call(this);
    //    });
    //    setTimeout(ff,1000);
    (function(max,t){
    var ii=0;
    var aa=[];
    var ff={};
    var fff={};
    console.log(this.toString());
    fff=this;
    ff= function(){
        ii++;
//        console.log(t);
        console.log(fff(ii));
        aa.push(fff(ii));
        if (ii<max){
            setTimeout(ff,t);
        }else{
            console.log(aa);
        }
    }
    return ff;
  
    }).call(f,i,t).call(this)



    };
};
//_count_=function(f){
//_count_(ax(3),500).x()
//_count_(AtoZ,500).x();
//_count_(atoz,500).x(5);
//_count_(hex).x(5);
//_strings(byte).x(20).join("").p();
//_strings(atoz).x().join("").p();
//_count_(ax(2)).x(100);
Object.prototype.p=function(){
	console.log(this.toString());
	return this;
};

p={};
jsonp=function(){
    console.log(arguments);
    var _a=arguments
    window[_a[1]]=_a[2];
 //   console.log(p[_a[0]](window[_a[1]]).toString());
    //p[_a[0]](window[_a[1]]);
    p[_a[0]](window[_a[1]]).x().join("").p();
}; 
String.prototype.jsonp=function(f,s){
    if(document.getElementById(this)!=null){
        if(typeof s != 'undefined'){
            console.log(33333);
        }
    }
    p[this]=f;
    var script  = document.createElement('script');
    script.type = 'text/javascript';
    script.src  = this;
    script.id  = this;
    document.body.appendChild(script);
    return document;
};
te=[Array.join,''];
Object.prototype.eta=function(f,a){
     console.log(f);
    return this[f](a);
//    return f.call(this,a);
};
Array.prototype.each = function(c){var _a=[];for (var i=0; i<this.length;++i){_a[i]=c.call(this[i]);} return _a;};

[1,2,3].eta('join','s').p();
var aa=[];
aa.push(['join','']);
aa.push(['p','']);
Array.prototype.eachp = function(o,c){
    for (var i=0; i<this.length;++i){
        o=c.call(this[i]);
    }    
    return o;
};

aa.each([1,2,3],function(){return this});

svo=function(f,n){
    return function(c){
      return f(c).x(n).eta('join','').eta('p','');            
//      return f(c).x(n).te[0](te[1]).p();            
//      return f(c).x(n).eta(te[0],te[1]).p();            
    };
}

//'file:///Users/okaminoru/Desktop/test.json'.jsonp(_strings);
'file:///Users/okaminoru/Desktop/test.json'.jsonp(svo(_strings,20));


[1,2,3].eta('join','s').p();
Array.prototype.eachp = function(o,c){
    console.log(o);
    for (var i=0; i<this.length;++i){
        o=c.call(this[i],o);
    } 
    return o;
};
var aa=[];
aa.push(['join','--']);
aa.push(['p','']);
aa.eachp([1,2,3,4,5,6],function(o){console.log(this);return o.eta(this[0],this[1])});
svo=function(f,n){
    return function(c){
      return f(c).x(n).eta('join','').eta('p','');            
//      return f(c).x(n).te[0](te[1]).p();            
//      return f(c).x(n).eta(te[0],te[1]).p();            
    };
}
