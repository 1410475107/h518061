//基础框架 express
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

//启用cookie解析
let  secret = 'h5.app.baidu.com';
app.use(cookieParser(secret));

app.get('/a', (req ,res)=>{
    let options = {signed:true, maxAge:30*24*3600*1000};
    //设置cookie的方式
    res.cookie('username', '徐宇');
    res.cookie('age', '20', options);
    res.cookie('passwd', '123456', {signed:true});
    res.cookie('money', '999', options);
    res.send('cookie设置完成');
});

app.get('/b', (req ,res)=>{
    res.send('cookie');
});

app.get('/c', (req ,res)=>{
    //获取cookie信息
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send('你好，' + req.cookies.username);
});

app.get('/clear', (req, res)=>{
    res.clearCookie('username');
    res.send('清除cookie');
});



//端口监听：网卡给引用或者服务分配的编号  
app.listen(81, () => {
    console.log('...');
});