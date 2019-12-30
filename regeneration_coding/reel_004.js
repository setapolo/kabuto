var head = (function(){
/*
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="UTF-8">
<title>TIJ Web Speech</title>
<script>
  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      //document.getElementById('status').innerHTML = 'Please log ' +
      //  'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      //document.getElementById('status').innerHTML = 'Please log ' +
      //  'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId: 515566662249917,
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version: 'v3.1'
  });

  window.fblogoff = function(){
    FB.getLoginStatus(function(response) {
        if (response && response.status === 'connected') {
            FB.logout(function(response) {
                document.location.reload();
            });
        }
    });	
  }
  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me',{fields: 'id,name,email,picture'}, function(response) {
      console.log('Successful login for: ' + response.name);

      document.getElementById('uicon').innerHTML =
        ''  + '<img id="icon_img" src ="'+response.picture.data.url+'" class="rounded-circle" width="70%" alt="'+response.name+'" onClick="fblogoff();">';

	  document.getElementById('fb_button').style.display="none";

      console.log(response);  
    });
  }
</script>
<script type="text/javascript"src="//webfonts.sakura.ne.jp/js/sakura.js"></script> 
<script>
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
var recognition = new webkitSpeechRecognition();
recognition.lang = 'ja';
var answer='';
recognition.onresult = function(event){
    console.log("onresult");
    console.log(event);
    var results = event.results;
    for (var i = event.resultIndex; i<results.length; i++)
        document.getElementById('result_text').innerHTML = results[i][0].transcript;
	
    var s='';
    var result = results[0][0].transcript;
    if (document.getElementById('result_text').innerText == answer){
  	  s="正解";
      document.getElementById(answer).className ="bg-success";
    }else{
      s="不正解";
      result = document.getElementById('expected_text').innerHTML + " (" + document.getElementById('result_text').innerHTML+")";
    }
    var s2='発声練習';
    if (document.getElementById("icon_img")){
    	s2=document.getElementById("icon_img").alt;
    }

  	gtag('event', s2, {'event_category': s,
  										'event_label': result});


    if (document.getElementById('result_text').innerText == answer){
      var s = tblTbody.rows[i].id;
      var j = (localStorage.getItem(answer)) ? localStorage.getItem(answer):0;
      j = isNaN(parseInt(j)) ? 0 : parseInt(j)+1;
      var element = document.getElementById(answer).cells[0];
      while (element.firstChild.nextSibling) element.removeChild(element.firstChild.nextSibling);
      var ss=document.getElementById(answer).cells[0].innerHTML;
      document.getElementById(answer).cells[0].innerHTML = ss+'<span class="badge badge-info">'+j+'</span>';
      localStorage.setItem(answer, j);  
    }


	//    window.alert(localStorage.getItem(answer));
}
rec_start = function(s,c){
		answer = c;
		document.getElementById('result_text').innerHTML = "";
		document.getElementById('expected_text').innerHTML = s;
//    document.getElementById('result_text').innerHTML ="";
		recognition.start();
}

</script> 

</head>
<body>
<header class="topbar">
  <nav class="navbar navbar-expand-lg navbar-light " style="background-color: #98fb98;">
    <div class="container">
      <a class="navbar-brand " href="/" style='font-family: "Cinema Letter";'>ゴイス[はつおん]</a> 
      <div id="uicon"></div>
      <fb:login-button id="fb_button" scope="public_profile,email" onlogin="checkLoginState();"></fb:login-button>
    </div>
  </nav>
</header>
  <!-- <input type="button" onClick="fblogoff();" value="off"　> -->
<br>
<div class="container">
	<div class="card">
	  <h7 id="expected_text" class="card-header"></h7>
	  <h6 id="result_text" class="card-body"></h6>
	  </div>
	</div>
</div>
<br>
*/
}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");




var sss = (function(){
/*
 <tr id="word1">  
    <td>word2</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('word1','word2');" value="録音"　>
      </div>
    </td>
  </tr> 
*/
}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");

var mid = (function(s){
	var ss = s.map(function(c,i,a){
		return sss.replace(/word1/ig,c[1]).replace(/word2/ig,c[0]);
	}).join("");
	ss = '<table id="table_1" border=1 class="table table-striped">' + ss + "</table>";
	return ss;
	//console.log("sec1:",ss);
})(
(function(){
	return [
	["このチャット ボットは家を探すことができるチャット ボットです","このチャット ボットは家を探すことができるチャット ボットです"],
	["このチャット ボットは Java 言語を利用して開発しています","このチャット ボットは Java 言語を利用して開発しています"],
	["家の見学予定を調整できます","家の見学予定を調整できます"],
	["英語の質問に答えることができます","英語の質問に答えることができます"],
	["自分の好きな家を探すことができます","自分の好きな家を探すことができます"],
	];
})()
);


var mid_ = (function(){
/*
<table id="table_1" border=1 class="table table-striped">
  <tr id="そちらの天気は いかがですか">  
    <td>そちらの天気は いかがですか</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('そちらの天気は いかがですか','そちらの天気は いかがですか');" value="録音"　>
      </div>
    </td>
  </tr> 
  <tr id="あちらに展示してあります">  
    <td>あちらに展示してあります</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('あちらに展示してあります','あちらに展示してあります');" value="録音"　>
      </div>
    </td>
  </tr> 
  <tr id="たちつてと">  
    <td>たちつてと</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('たちつてと','たちつてと');" value="録音"　>
      </div>
    </td>
  </tr> 
  <tr id="らりるれろ">  
    <td>らりるれろ</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('らりるれろ','らりるれろ');" value="録音"　>
      </div>
    </td>
  </tr> 
  <tr id="完了しました">  
    <td>完了しました</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('完了しました','完了しました');" value="録音"　>
      </div>
    </td>
  </tr>   
  <tr id="利用例">  
    <td>利用例</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('利用例','利用例');" value="録音"　>
      </div>
    </td>
  </tr> 
  <tr id="万引き防止">  
    <td>万引き防止</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('万引き防止','万引き防止');" value="録音"　>
      </div>
    </td>
  </tr> 
  <tr id="チケットの転売防止">  
    <td>チケットの転売防止</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('チケットの転売防止','チケットの転売防止');" value="録音"　>
      </div>
    </td>
  </tr> 
  <tr id="犯罪捜査">  
    <td>犯罪捜査</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('犯罪捜査','犯罪捜査');" value="録音"　>
      </div>
    </td>
  </tr> 
  <tr id="セキュリティ">  
    <td>セキュリティ</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('セキュリティ','セキュリティ');" value="録音"　>
      </div>
    </td>
  </tr>   
  <tr id="こちらが">  
    <td>こちらが</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('こちらが','こちらが');" value="録音"　>
      </div>
    </td>
  </tr>   
  <tr id="こちらが主な利用例です">  
    <td>こちらが主な利用例です</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('こちらが主な利用例です','こちらが主な利用例です');" value="録音"　>
      </div>
    </td>
  </tr> 
  <tr id="顔認識システムの主な利用例です">  
    <td>顔認識システムの、主な利用例です</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('顔認識システムの主な利用例です','顔認識システムの主な利用例です');" value="録音"　>
      </div>
    </td>
  </tr> 
  <tr id="照合する">  
    <td>照合する</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('照合する','照合する');" value="録音"　>
      </div>
    </td>
  </tr> 
  <tr id="統合する">  
    <td>統合する</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('統合する','統合する');" value="録音"　>
      </div>
    </td>
  </tr> 
  <tr id="総合的な">  
    <td>総合的な</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('総合的な','総合的な');" value="録音"　>
      </div>
    </td>
  </tr> 
  <tr id="申します">  
    <td>申します</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('申します','申します');" value="録音"　>
      </div>
    </td>
  </tr> 
</table>	
*/
}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");

var tail = (function(){
/*
<br>
<footer id="footer"　 style="background-color: #98fb98;">
    <div class="container">
      <div class="footer-holder">
        <div class="row">
          <div class="col-md-7">
            <div class="logo">
              <span class="copyright">Copyright© 2017 Peace Growba Co., Ltd. All Rights Reserved.</span>
            </div>
          </div>
          <div class="col-md-5">
            <div class="text-holder">
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

</body>
</html>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-125701794-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-125701794-1');
</script>
<script>
	var tblTbody = document.getElementById('table_1');
	for (var i=0, rowLen=tblTbody.rows.length; i<rowLen; i++) {
			var s = tblTbody.rows[i].id;
			console.log(s);
			var j = (localStorage.getItem(s)) ? localStorage.getItem(s):0;
			if (j>0){
				var ss=tblTbody.rows[i].cells[0].innerHTML;
				tblTbody.rows[i].cells[0].innerHTML = ss+'<span class="badge badge-info">'+j+'</span>';
			}
			console.log(j);
	}	
</script>
*/
}).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "");
console.log(head);
console.log(mid);
console.log(tail);