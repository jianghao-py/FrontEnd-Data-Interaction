const ps = require("path");

//拼接路径
const pathStr = ps.join(__dirname,"Files/text.txt");
console.log(pathStr);

//获取文件名
const fileName = ps.basename(pathStr);
console.log(fileName);

//获取扩展名
const extend = ps.extname(pathStr);
console.log(extend);