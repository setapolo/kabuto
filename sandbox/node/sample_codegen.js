var fs = require('fs');
var officegen = require('officegen');

var xlsx = officegen ('xlsx');

xlsx.on ('finalize', function(written) {
  console.log('Finish to create an Excel file.\nTotal bytes created: ' + written);
});

xlsx.on('error', function(err) {
  console.log(err);
});

sheet = xlsx.makeNewSheet();
sheet.name = '日本語のシート名';

// The direct option - two-dimensional array:
sheet.data[0] = [];
sheet.data[0][0] = 1;
sheet.data[1] = [];
sheet.data[1][3] = 'あいう';
sheet.data[1][4] = 'えお';
sheet.data[1][5] = 'Text';
sheet.data[1][6] = 'Here';
sheet.data[2] = [];
sheet.data[2][5] = 'abc';
sheet.data[2][6] = 900;
sheet.data[6] = [];
sheet.data[6][2] = 1972;

// Using setCell:
sheet.setCell('E7', 340);
sheet.setCell('I1', -3);
sheet.setCell('I2', 31.12);
sheet.setCell('G102', 'こんにちは World!');

var out = fs.createWriteStream('日本語のファイル名（だくてん入り）.xlsx');

out.on('error', function(err) {
    console.log(err);
});

xlsx.generate(out);
