const fs = require("fs");

fs.rename("./fs-file/重命名.txt","./fs-file/hhh.js",(err)=>{
    if(err){
        throw err;
    }
    console.log("成功");
})