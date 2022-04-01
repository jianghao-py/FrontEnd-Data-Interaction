// 引入HTTP模块
const http = require("http");


// 调用方法，创建服务对象
const server = http.createServer(function(request,response){
    // request  请求报文的封装对象
    // console.log(request.method);
    // console.log(request.url);
    // console.log(request.httpVersion);
    // console.log(request.headers);

    // 接收请求体数据
    let body = '';
    request.on("data",(chunk)=>{
        body += chunk.toString();
    });

    request.on("end",function(){
        console.log(body);
        console.log("body received");
    })

    // response     响应报文的封装对象
    response.end("HTTP server");
});



// 监听端口，启动服务
server.listen(80,function(){
    console.log("服务已经启动，端口80");
});

