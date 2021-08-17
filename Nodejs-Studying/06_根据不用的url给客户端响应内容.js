const url = require("http");

const server = url.createServer();

server.on("request",function(req,res){
    // 获取请求url地址
    const url = req.url;
    //设置默认响应
    let content = "<h1>404 Not Found</h1>";
    //判断用户请求位置
    if(url === "/" || url==="/index.html"){
        content = "<h1>首页</h1>"
    }
    if(url==="/about.html"){
        content = "<h1>个人主页</ h1>"
    }
    //设置响应头防止中文乱码
    res.setHeader("Content-Type","text/html;charset=utf-8")
    //把内容发送给客户端
    res.end(content);
})

//启动服务器
server.listen(80,()=>{
    console.log("http://127.0.0.1");
})