const fs = require("fs");

// 异步读取
fs.readFile("./fs-file/fs-write-test.txt",function(err,data){
    if(err){
        console.log("错误：",err);
        return;
    }

    console.log(data.toString());
})





// 同步读取
let htmlF = fs.readFileSync("./fs-file/write-stream.html");
console.log(htmlF.toString());




// 流式读取
const rs = fs.createReadStream("./fs-file/writePractice.txt");

// 绑定事件
rs.on("data",(chunk)=>{
    console.log(chunk.toString());
});