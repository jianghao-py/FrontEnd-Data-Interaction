const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    response.send("主页面");
});


app.get('/res',(request,response)=>{
    response.statusCode = 200;

    response.statusMessage = "OK";

    response.setHeader("Week","Monday");

    // response.download('./form.html');

    // 将文件中的内容响应给浏览器
    response.sendFile(__dirname+"/2-form.html");

    // 跳转
    // response.redirect("https://www.baidu.com/");

    // response.send("响应页面");
});

app.listen(80);