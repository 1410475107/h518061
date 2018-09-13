//使用第三方模块，必须引入：require
const express = require('express');
//使用express创建一个web服务
const server = express();

//接收各种  路由  请求：get、post
// server.get('path：string', 响应内容:function);
server.get('/hasdasd', (request, respone) => {
    //设置响应头
    respone.writeHead(200, {
        'content-type': 'text/html;charset="UTF-8"'
    });
    respone.write('输出内容');
    respone.end();

});

server.get('/index', (req, res) => {
    //具体响应内容完全由我们控制
    res.send('首页');
});

server.get('/', (req, res) => {
    res.send({
        username: '任敏',
        age: 22
    });
});

server.get('/sfsf', (req, res) => {
    res.send('501-404');

});

//支持多函数
server.get('/fn', (req, res, next) => {
    req.body = {};
    // res.send('1');
    req.body.username = '龙宇';
    next();
}, (req, res, n) => {
    // res.send('2');
    req.body.passwd = '123456' 
    n();
}, (req, res, n1) => {
    res.send(req.body);
});

server.listen(81);