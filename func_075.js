//closure cascading
cc=function(head){
  a=[head];  
  var f=function(c){
    a.push(c);
    return (c!=null)?f:head.apply(this,a);
  }
  return f
}
cc(console.log)(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)()
;