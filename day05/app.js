const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const ejs = require('ejs');
const bodyParser = require('body-parser');
//验证码模块
var svgCaptcha = require('svg-captcha');
var md5 = require('md5');
const app = express();
//使用cookie中间件
let secret = 'l.app.myweb.www';
app.use(cookieParser(secret));
//session的操作  express-session
app.use(session({
    name:'sessid',
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
//模板引擎设置
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', './views');
//接收post过来的数据
app.use(bodyParser.urlencoded({extended: true}));

app.get('/login', (req, res) => {
    console.log(md5('123456'));
    console.log(md5('啊发发撒地方萨芬根深蒂固十多个电饭锅'));
    res.render('admin/login');
});

app.get('/coder', (req, res) => {
    var captcha = svgCaptcha.create({noise:4,ignoreChars: '0o1i', size:2});
	req.session.coder = captcha.text;
	
	res.type('svg'); // 使用ejs等模板时如果报错 res.type('html')
	res.status(200).send(captcha.data);
    
});
app.post('/coder', (req, res)=>{
    let coder = req.body.coder;
    if(req.session.coder.toLowerCase() != coder.toLowerCase()){
        res.json({r:'error'});
        return ;
    }
    res.json({r:'right'});
});


app.listen(81, () => {
    console.log('...');
});