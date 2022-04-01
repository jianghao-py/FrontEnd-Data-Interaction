const http = require("http");
const url = require("url");
const sever = http.createServer(function(request,response){
    response.setHeader("Content-Type","text/html;charset=utf-8");

    let bg = url.parse(request.url,true).query.bg = '#edf'

    // 响应体
    response.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background:${bg};
        }
    </style>
</head>
<body>
    <h1>你好星期三</h1>
</body>
</html>
    `)
});



sever.listen(80,function(){
    console.log("200 OK");
})