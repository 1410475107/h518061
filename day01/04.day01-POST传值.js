//使用第三方
const express = require('express');

//使用自定义模块
// const bodyparser = require('./middleware/post');
const bodyParser = require('body-parser');
// 创建服务
const app = express();
app.get('/student', (req, res) => {
    console.log(req.query);
    console.log(req.query.username);
    res.send('学生信息');
});
//首先调用中间件  所有的POST数据都会经过该中间件处理
// app.use(bodyparser);
app.use(bodyParser.urlencoded({extended:true}));

app.post('/addstu', (req, res) => {
    //打印接收的数据
    console.log(req.body);
    res.send('添加学生信息成功');
});

app.post('/updatestu', (req, res) => {
    //打印接收的数据
    console.log(req.body);
    res.send('修改学生信息成功');
});

// 静态资源托管   html  css  js  img  video  audio 等
app.use(express.static('view'));
//端口监听
app.listen(81);