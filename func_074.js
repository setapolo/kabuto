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
    var bootstrap=function(c,flg){
        (flg)?(console.log(flg,arguments," at ",arguments.callee.name)):0;
        var ret=bootstrap;
        Object.assign(g,c);
        is(c)("Function")(function(){
            g.back=bootstrap;
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
            is(c)(true)(function(){
                g.ret=f;    
            })(function(){
                g.ret=g.back("");    
            })
            return g.ret;    
;
        }
        return f;

    }})
    (getopt)("file1")("file2")()(function(){
        var userHome;
        var sep;
        var LF;
        is(process)(true)(function(){
            is(process.platform)(/win32/)(function(){//win32
                userHome=process.env["USERPROFILE"];
                sep="\\";
                LF="\r\n"
            })(function(c){
                userHome=process.env["HOME"];
                sep="/";
                LF="\n"
            });
        });
        var hrstart = process.hrtime();
        const fs = require('fs');
        //console.log(fs.readdirSync(userHome));
        var cat = function(c,flg){
            (flg)?(console.log(flg,arguments," at ",arguments.callee.name)):0;
            var a=[c];
            var f=function(cc,flg){
                (flg)?(console.log(flg,arguments," at ",arguments.callee.name)):0;
                is(cc)(true)(function(){
                    a.push(cc);
                })(function(){
                    console.log(a.join(sep));                    
                })
                return f;
            };
            return f;
        };
        cat(userHome)("Downloads")
                            (file1)()
                            (file2)();
        console.log(file1);                    
/*
        console.log(fs.existsSync([userHome,"Downloads",file1].join(sep), 'utf-8'));
        console.log(fs.existsSync([userHome,"Downloads",file2].join(sep), 'utf-8'));
        let text1 = fs.readFileSync([userHome,"Downloads",file1].join(sep), 'utf-8');
        let text2 = fs.readFileSync([userHome,"Downloads",file2].join(sep), 'utf-8');
        text1.split(LF).map(function(c,i,a){
            text2.split(LF).map(function(cc,ii,aa){
              //  (c==cc)?(console.log("identical",c)):0;
            })
        });
        var hrend = process.hrtime(hrstart);
        console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
        console.log("aaa",[userHome,"Downloads",file1].join(sep));
*/
    })
;


