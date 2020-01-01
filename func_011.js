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
            (rr[back]=c):0;
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
        (c)?
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
    ("split")(function(c,cc,rr){
        var r = rr.args.shift();
        return ((c['split'])?(c.split(r)):c);
    })
    ("join")(function(c,cc,rr){
        var r = rr.args.shift();
        return ((c['join'])?(c.join(r)):c);
    })
    ("p")(function(c,rr){
        console.log("p#",c);
        return c;
    })
    ("join_>")(function(){
        return ">";
    })
    ("divide_>")(function(){
        return />/;
    })
    ("test")(function(c,rr){
        return c.replace(/tr/ig,"br");
    })
    ([1,2,3,4])(8)()
    ("ss")("test")
    (/divide_>/)("split")(/join_>/)("join")("p")(1)
    //("p")(1)
    ;


