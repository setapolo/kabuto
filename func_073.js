(function(g,flg){//should be equal global scope
    (flg)?(console.log(flg,arguments," at ",arguments.callee.name)):0;
    g.is = function(c,flg){
           (flg)?(console.log(flg,arguments," at ",arguments.callee.name)):0;
            var ss=Object['prototype']['toString']['call'](c).slice(8, -1);
            var cmp=function(sss,flg){
                (flg)?(console.log(flg,arguments," at ",arguments.callee.name)):0;
                var zz=Object['prototype']['toString']['call'](sss).slice(8, -1);
                var type=typeof sss;
                var b = (type=="boolean")?(c!=null):((type=="string")?(sss==ss):(c==sss));
                b=(typeof c=="boolean")?c:b;
                b=(zz=="Array")?((sss.reduce(
                    (function(base){
                        return function(pp,cc,ii,aa){
                            return (ii==1)?(((base==pp)?0:1)*((base==cc)?0:1)):((base==cc)?0:1)*pp};
                    }(c))))==0)?true:false:b;
                return function(f){
                    (b==true)?f.apply(c,[c,ss,sss]):0;
                    return function(ff){
                        (b==false)?((ff)?ff.apply(c,[c,ss,sss]):0):0;
                        return is(c);
                    };
                }
            }
            return cmp;
        };
    var diov = function(){};    
    var bootstrap=function(c,flg){
        (flg)?(console.log(flg,arguments," at ",arguments.callee.name)):0;
        var ret=bootstrap;
        Object.assign(g,c);
        is(c)("Function")(function(){
            ret = c(g);
        })
        return ret;
    };
    return bootstrap;
})(global) // basicall golobal scope representation
    ({getopt:function(g,flg){
        (flg)?(console.log(flg,arguments," at ",arguments.callee.name)):0;
        var argc=0;
        var argv=[];
        var execPath="";
        var execfile="";
        [execPath,execfile,...argv]=process.argv;
        is(g)(true)
            (function(){
                g.argv=argv;
            }
        );        
        var f=function(c,flg){
            (flg)?(console.log(flg,arguments," at ",arguments.callee.name)):0;
            is(c)("String")(function(){
                g[c]=argv[argc];
                argc++;
            })
            return f;
        }
        return f;

    }})
    (getopt)("aa")("bb")()
;
    aa.split("").map(function(c,i,a){
        bb.split("").map(function(cc,ii,aa){
            (c==cc)?(console.log("identical",c)):0;
        })
    });

/*

var hrstart = process.hrtime();
const fs = require('fs');
let text1 = fs.readFileSync("C:\\Users\\student06\\Downloads\\list1.csv", 'utf-8');
let text2 = fs.readFileSync("C:\\Users\\student06\\Downloads\\list2.csv", 'utf-8');
text1.split("\r\n").map(function(c,i,a){
    text2.split("\r\n").map(function(cc,ii,aa){
        (c==cc)?(console.log("identical",c)):0;
    })
});
var hrend = process.hrtime(hrstart)
//console.log(hrend);
//console.info('Execution time: %dms', end)
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
console.log(text1.split("\r\n").length);
console.log((Array.from(new Set(text1.split("\r\n")))).length);
console.log(text2.split("\r\n").length);
console.log((Array.from(new Set(text2.split("\r\n")))).length);
*/