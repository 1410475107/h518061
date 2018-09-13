const http = require('http');
const fs = require('fs');
const url = require('url');
http.createServer((req, res)=>{
    //判断图片
    let pathname = url.parse(req.url).pathname;
    let path = './html/index.html';
    if(pathname.substring(0, 4) == '/img'){
        console.log(pathname);
        path = '.' + pathname;
    }
    fs.readFile(path, (err, data)=>{
        res.write(data);
        res.end();
    });
   

}).listen(81);