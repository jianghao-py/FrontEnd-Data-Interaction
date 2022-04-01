const data = [
    {
        id: 1,
        name: '刘德华',
        song: '冰雨'
    },
    {
        id: 2,
        name: '周杰伦',
        song: '不能说的密码'
    },
    {
        id: 3,
        name: '林俊杰',
        song: '不为谁而作的歌'
    },
    {
        id: 4,
        name: '五月天',
        song: '干杯'
    },
    {
        id: 5,
        name: '张艺兴',
        song: '莲'
    },
    {
        id: 6,
        name: '刘德华',
        song: '冰雨'
    },
    {
        id: 7,
        name: '张学友',
        song: '情人'
    }
];

const http = require('http');
const url = require("url");
const fs = require("fs");

const server = http.createServer(function(request,response){
    let pathname = decodeURI(url.parse(request.url, true).pathname);
    
    if (pathname === '/songs') {
        let datas = '';
        for(let i = 0;i<data.length;i++){
            datas += `
            <tr>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].song}</td>
            </tr>`
        }
    
        response.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                table,td{
                    
                    border-collapse: collapse;
                }
        
                table tr{
                    border: 1px solid #333;
                }
        
                table tr td{
                    border: 1px solid #333;
                    padding: 20px;
                }
        
                table tr th{
                    border: 1px solid #333;
                }
            </style>
        </head>
        <body>
            <table>
                <tr>
                    <th>ID</th>
                    <th>歌手</th>
                    <th>歌曲</th>
                </tr>
                ${datas}
            </table>
            <script src="/abc.html"></script>
        </body>
        </html>
        `)
    }else if(pathname === '/abc.html'){
        //响应各行换色的 JS 内容
        let JS = fs.readFileSync('./05_功能.js')
        //响应 JS 代码
        response.end(JS);
    }else{
        response.end('404 Not Found');
    }

});
    


server.listen(80);