const fs = require("fs");

fs.readFile("./fs-file/data.json",function(err,data){
    if(err){
        throw err;
    }
    let str = data.toString();
    let dataJSON = JSON.parse(str);
    console.log(dataJSON);
})