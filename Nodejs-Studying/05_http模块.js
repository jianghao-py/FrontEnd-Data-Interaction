//请求http模块
const http = require("http");

//创建服务器
const server = http.createServer();

//监听客户端发送的请求
server.on("request",function(req,res){
    const url = req.url;
    const method = req.method;
    console.log(url);
    console.log(method);

    //防止发送中文乱码
    res.setHeader('Content-type','text/html;charset=utf-8');
    //向客户端响应一些内容
    res.end(url+method);
})

//启动服务器
server.listen(80,()=>{
    console.log("http://127.0.0.1");
})
