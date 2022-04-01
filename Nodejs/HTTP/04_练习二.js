const http = require("http");
const url = require("url");
const fs = require("fs");
const qs = require("querystring");


const server = http.createServer(function(request,response){
    let {method} = request;
    let pathname = url.parse(request.url,true).pathname;

    response.setHeader("Content-Type","text/html;charset=utf-8");

    if(method.toUpperCase() === "GET" && pathname === "/login"){
        response.end('登录页面');
    }else if(method.toUpperCase() === "GET" && pathname === "/register"){
        response.end(fs.readFileSync(__dirname + "/04.html"));
        
    }else if(method.toUpperCase() === "POST" && pathname === "/register"){
        let body = '';

        request.on("data",(chunk)=>{
            body += chunk;
        });

        request.on("end",()=>{
            // 将用户的字符串信息转换为对象
            let data = qs.parse(body);
            

            let json = fs.readFileSync(__dirname+"/04.json").toString();
            let jsonObj = JSON.parse(json);

            jsonObj.data.push(data);
            let str = JSON.stringify(jsonObj);
            

            fs.writeFile(__dirname+"/04.json",str+"\r\n",function(){

            });
            response.end("注册成功")
        })
        
    }else{
        response.end("<h1>404</h1>")
    }
});

server.listen(80);