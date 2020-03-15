(function(g,flg){//should be equal global scope
    (flg)?(console.log(flg,arguments," at ",arguments.callee.name)):0;
    g.is = function(c,flg){
           (flg)?(console.log(flg,arguments," at ",arguments.callee.name)):0;
            var ss=Object['prototype']['toString']['call'](c).slice(8, -1);
            var cmp_str=function(sss,flg){
                (flg)?(console.log(flg,arguments," at ",arguments.callee.name)):0;
                var zz=Object['prototype']['toString']['call'](sss).slice(8, -1);
                var type=typeof sss;
                var b=false;
                is(/.*/)(zz)(function(){
                    b=(ss="String")?(c.match(sss)!=null):false;
                })(function(){
                    b = (type=="boolean")?(c!=null):((type=="string")?(sss==ss):(c==sss));
                    b=(typeof c=="boolean")?c:b;
                    b=(zz=="Array")?((sss.reduce(
                        (function(base){
                            return function(pp,cc,ii,aa){
                                return (ii==1)?(((base==pp)?0:1)*((base==cc)?0:1)):((base==cc)?0:1)*pp};
                        }(c))))==0)?true:false:b;
                });
                return function(f){
                    (b==true)?f.apply(c,[c,ss,sss]):0;
                    return function(ff){
                        (b==false)?((ff)?ff.apply(c,[c,ss,sss]):0):0;
                        return is(c);
                    };
                }
            }
            var cmp=function(sss,flg){//only RegExp
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
            return (ss=="RegExp")?cmp:cmp_str;
        };
//    var diov = function(){};    
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
var userHome;
is(process)(true)(function(){
    is(process.platform)(/win32/)(function(){
        userHome=process.env["USERPROFILE"];
    })(function(c){
        userHome=process.env["HOME"];
    });
});
console.log(userHome);

var hrstart = process.hrtime();
/*
const fs = require('fs');
//console.log(fs.readdirSync(userHome));
console.log(fs.existsSync(userHome+"/Downloads/"+aa, 'utf-8'));
console.log(fs.existsSync(userHome+"/Downloads/"+bb, 'utf-8'));
let text1 = fs.readFileSync(userHome+"/Downloads/"+aa, 'utf-8');
let text2 = fs.readFileSync(userHome+"/Downloads/"+bb, 'utf-8');
text1.split("\n").map(function(c,i,a){
    text2.split("\n").map(function(cc,ii,aa){
        (c==cc)?(console.log("identical",c)):0;
    })
});
var hrend = process.hrtime(hrstart);
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);

*/
