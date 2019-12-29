var jslinks = (function(){
/*
https://code.jquery.com/jquery-1.12.4.js
https://code.jquery.com/ui/1.12.1/jquery-ui.js
*/
}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");
console.log(jslinks.split("\n").map(function(c,i,a){return '<script src="URL"></script>'.replace(/URL/ig,c);}));
