let data = { 
    "id": 4860, 
    "uuid": "5e398eef-f5cf-4ff6-a000-c24913de86dd", 
    "hitokoto": "世上所以不公平之事是由于当事人能力不足所致。", 
    "type": "a", 
    "from": "金木研", 
    "from_who": null, 
    "creator": "夕之树", 
    "creator_uid": 4248, 
    "reviewer": 4756, 
    "commit_from": "web", 
    "created_at": "1573331301", 
    "length": 22 
};

// 将JSON对象转为字符串
let str = JSON.stringify(data);

const fs = require("fs");

fs.writeFile("./fs-file/writePractice.txt",str,function(err){
    if(err){
        console.log("warning",err);
        return;
    }
});

