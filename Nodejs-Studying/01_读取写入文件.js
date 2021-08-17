
        const fs = require("fs");
        fs.writeFile('./Files/text.txt',"Hello World",function(err){
            console.log(err);
        })

        
        fs.readFile('./Files/text.txt',function(err,dataStr){
            if(err){
                return console.log("读取文件失败");
            }
            else{
                console.log(dataStr);
            }
            
        })
    