const fs = require("fs");


//_dirname 表示当前文件所处的目录
fs .readFile(__dirname+"/Files/整理好的成绩.txt","utf-8",function(err,dataStr){
    if(err){
        console.log(err);
    }
    console.log(dataStr);
})