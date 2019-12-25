console.log(
(function(g){
  return function(a){
    var f = function(c){
       return g(f)(a)(c);
    }
    return f;
  }
})(function(f){
  return function(a){
    var g = function(c){
      (c)?a['push'](c):0;
      return (c)?g:a['reduce'](function(p,c,i,a){return p*c}); 
    }
    return g;
  }
})({
  'm':[],
  'push':function(c){this.m.push(c)},
  'reduce':function(f){return this.m}})
  (4)(2)(3)(5)(8)()
)
