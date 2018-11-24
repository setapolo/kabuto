var fs = require('fs');

(function(fi,st){
  try {
    fs.writeFileSync(fi, st);
  } catch(err) {
  	console.log(err);
  }	
})('./test.txt',
`this is test
abcdefg
1234567`)
