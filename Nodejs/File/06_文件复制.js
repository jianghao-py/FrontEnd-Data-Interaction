const fs = require("fs");

const ws = fs.createWriteStream("./fs-file/文件复制.txt");
const rs = fs.createReadStream("./fs-file/fs-write-test.txt");


// 方式一
rs.on("data",(chunk)=>{
    // 写入文件
    ws.write(chunk);
    ws.write(chunk);
})


// 方式二
rs.pipe(ws);