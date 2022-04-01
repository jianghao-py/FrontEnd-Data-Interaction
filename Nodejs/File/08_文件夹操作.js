const fs = require("fs");

// 创建文件夹
fs.mkdir("./File",(err)=>{
    if(err){
        throw err;
    }

});



// 读取文件夹
fs.readdir("./fs-file",(err,files)=>{
    if(err){
        throw err;
    }

    console.log(files);
});
// [
//     'data.json',
//     'fs-write-test.txt',
//     'hhh.js',
//     'write-stream.html',
//     'writePractice.txt',
//     '文件复制.txt'
//  ]



// 删除文件夹
fs.rmdir("./File",(err)=>{
    console.log(err);
})
// null