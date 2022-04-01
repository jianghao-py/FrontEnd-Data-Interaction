const express = require('express');

const app = express();

const fs = require("fs");


// 全局中间件
let record = function(request,response,next) {
    let path = request.url;
    let v = request.httpVersion;
    let method =request.method;

    let str = `${path} ${v} ${method}\r\n`;

    fs.writeFileSync("./5.log",str,{flag:"a"});

    next();
};


// 路由中间件
let checkUser = function(request,response,next) {
    let admin = request.query.admin;

    if(admin === '1'){
        next();
    }else{
        response.redirect("/login");
    }
};


app.use(record);


app.get("/",(request,response)=>{
    response.send("主页");
});


app.get("/login",(request,response)=>{
    response.sendFile(__dirname+"/2-form.html");
});

app.get("/admin",checkUser,(request,response)=>{
    response.send("用户主页");
});



app.listen(80);