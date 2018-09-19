const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
//使用cookie中间件
let secret = 'l.app.myweb.www';
app.use(cookieParser(secret));
//session的操作  express-session
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge:30*24*3600*1000
    }
}));
/*
    各参数意义：
    secret：用来对session数据进行加密的字符串.这个属性值为必须指定的属性。
    name：表示cookie的name，默认cookie的name是：connect.sid。
    maxAge：cookie过期时间，毫秒。
    resave：是指每次请求都重新设置session cookie，假设你的cookie是6000毫秒过期，每次请求都会再设置6000毫秒。
    saveUninitialized： 是指无论有没有session cookie，每次请求都设置个session cookie ，默认给个标示为 connect.sid。
*/
app.get('/set', (req, res)=>{
    req.session.username = '徐宇';
    req.session.uid = 108;
    req.session.header = '头像地址';
    res.send('session设置成功');
});

app.get('/login', (req, res)=>{
    res.send('登录页面');
});

app.use(function (req,res,next) {
    if(!req.session.uid){
        //跳转到登录页面
         res.redirect('/login');
        return ;
    }
    next();
});

app.get('/get', (req ,res)=>{
    res.send(`你好，${req.session.username}，欢迎你`);
});

app.get('/add', (req ,res)=>{
    
    res.send('添加学生信息');
});

app.get('/select', (req ,res)=>{
   
    res.send('添加学生信息');
});

app.get('/del', (req ,res)=>{
   
    res.send('添加学生信息');
});


app.get('/update', (req ,res)=>{
    
    res.send('添加学生信息');
});



app.listen(81, () => {
    console.log('...');
});