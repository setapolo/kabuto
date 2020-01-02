require("./htmlparser.js");
console.log(
HTMLtoXML("<p><b>Hello") 
);

 (function(st){
    var rr={ff:[],a:[],i:0,args:[]};var back;var fs=[];var ret=1;
    rr=Object.assign(rr,st);
    var set=function(c){
//        console.log(rr.i++,":set",arguments);
//        console.log("typeof:",typeof c,c);
        (typeof c == "function")?
            ((back)?(function(){
              rr[back]=c;
              back=null;
            }()):(c.apply(rr,[rr])))
              :0;
        (typeof c == "number")?
            (function(){
                "_"['repeat'](c)['split']('')['map'](function(){
                    rr.a.push(rr.a[rr.a.length-1])                                
                });
            }()):(
        (typeof c == "string")?
            (function(){
                rr[c]=0;
                back=c;
            }()):
        (typeof c == "object")?
            (rr.a.push(c)):0);

        return (c)?set:map;
    };
    var map=function(c){
//        console.log(rr.i++,":map",arguments);
//        console.log("map args:",rr.args);
        (typeof c == "function")?
            (c.apply(rr,[rr])):0;
        (typeof c == "string")?
            ((rr[c])?(function(){fs.push(rr[c])}()):0):0;
        (typeof c == "number")?
            (function(){
                "_"['repeat'](c)['split']('')['map'](function(cc,ii,aa){
                    fs.map(function(ccc,iii,aaa){ret = ccc.apply(rr,[ret,ii,rr])});
                });
                fs=[];
            })():0;
        (typeof c == "object")?
            (c['map'])?
            (function(){
                c['map'](function(cc,ii,aa){
                    fs.map(function(ccc,iii,aaa){
                        ret = ccc.apply(rr,[ret,cc,rr])
                    });
                });
            }()):((c['source'])?(
                (typeof rr[c['source']]=="function")?(
                    function(){
                        rr.args.push(rr[c['source']].apply(rr,[ret]));
//                    var cc = map(ret);
//                    console.log("rr.args",rr.args);
                        ret=c;
                    }()
                ):(ret = c)    
            ):0):0;

        return (c)?map:set;
    };
    return set;
})
({
    type:function(c){
        return []["slice"]["apply"](Object["prototype"]["toString"]["call"](c),[8,-1])["join"]("");
    }
})
    ("ss")(function(){
        return (function(){
/*
 <tr id="word1">  
    <td>word2</td>
    <td width = "20%">
      <div class="float-right">
        <input type="button" onClick="rec_start('word1','word2');" value="rec"　>
      </div>
    </td>
  </tr> 
*/
      }).toString().match(/(?:\/\*(?:[\s\S]*?)\*\/)/).pop().replace(/^\/\*/, "").replace(/\*\/$/, "")
    })
    ("p")(function(c,cc,rr){
        console.log("p:",c);
        return c;
    })
    ("join")(function(c,cc,rr){
        rr.a = rr.a.map(function(c,i,a){return c.join("")})
        return rr.a;
    })
    ("table")(function(c,cc,rr){
        var ret = rr.a.map(function(c,i,a){return ["<tr><td>",c,"</td></tr>"].join("")})
        return ["<table>",ret.join("\n"),"</table>"].join("");
    })
    ([1,2,3,4])(8)()
    ("join")("table")("p")(1)
    //("p")(1)
    ;


