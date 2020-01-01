// モジュールの取り込み
var MeCab = new require('mecab-async')
      , mecab = new MeCab()
    ;
 
// コマンドライン引数を取得
var args = process.argv.pop();
 
// 処理開始
mecab.parse(args, function(err, result) {
    if (err) throw err;
     console.log(result);
});
