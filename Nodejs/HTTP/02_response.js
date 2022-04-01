require("http").createServer((request,response)=>{
    // 状态码
    response.statusCode = 300;
    // 状态字符串
    response.statusMessage = "TEST";
    // 响应头
    response.setHeader("Content-type","text/html;charset=utf-8");
    response.setHeader("Eric","7777");
    // 响应体
    response.write("6666");

    // end和write必须至少要有一个，保证响应体不为空
    response.end("OK");
}).listen(80);