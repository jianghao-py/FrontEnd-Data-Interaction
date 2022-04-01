const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    response.end("Hi Express");
});

app.listen(80,()=>{
    console.log("服务器已经启动");
})