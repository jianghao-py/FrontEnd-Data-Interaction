const fs = require("fs");


console.log(__dirname);

let path = __dirname + "/fs-file/fs-write-test.txt";
fs.readFile(path,function(err,data){
    console.log(data.toString());
});

console.log(path);