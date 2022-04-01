// 文件写入
// 引入fs模块
const fs = require("fs");

const ws = fs.createWriteStream("./fs-file/write-stream.html");

// 执行写入
ws.write(
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
        
<body>       
</body>
        
</html>`
);

ws.write("hhh")


// 关闭写入
ws.close();