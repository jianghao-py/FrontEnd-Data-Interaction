// 文件写入
// 1. 引入fs模块
const fs = require("fs");


// {flag:"r"}
// r    read    只读
// w    write   可写
// a    append  追加，不覆盖以前的内容
// 异步API
fs.writeFile("./fs-file/fs-write-test.txt","异步写入测试",{flag:"a"},function(err){
    if(err){
        console.log("错误",err);
        return;
    }
    console.log("异步");
});

console.log("全局任务1");

// 同步API
fs.writeFileSync("./fs-file/fs-write-test.txt","同步写入测试",{flag:"a"});

console.log("全局任务2");
