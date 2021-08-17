const fs = require("fs");

fs.readFile("./Files/成绩.txt","utf-8",function(err,dataStr){
    if(err){
        return console.log("读取文件出错：" + err);
    }
    const oldStr = dataStr.split(" ");
    
    
    const arrNew = [];
    oldStr.forEach(item =>{
        arrNew.push(item.replace("=",":"));
    })

    

    
    const newStr = arrNew.join('\r\n');
    console.log(newStr);

    fs.writeFile("./Files/整理好的成绩.txt",newStr,function(err){
        if(err){
            return console.log("写入文件失败：" + err);
        }
        console.log("写入文件成功");
    })
})



