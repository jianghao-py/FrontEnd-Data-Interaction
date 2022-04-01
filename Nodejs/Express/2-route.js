const express = require('express');

const app = express();



app.get('/',(request,response)=>{
    response.setHeader("Content-type","text/html;charset=utf-8");
    response.end("路由页面");
});

app.get('/admin',(request,response)=>{
    // send方法是express封装的响应方法，等用于上面的setHeader加end
    response.send("后台页面");
});


app.get('/login',(request,response)=>{
    // send方法是express封装的响应方法，等用于上面的setHeader加end
    response.send("登录页面");
});


app.post('/login',(request,response)=>{
    // send方法是express封装的响应方法，等用于上面的setHeader加end
    response.send("登录页面");
});

app.listen(80,()=>{
    console.log("服务器已经启动");
})