/*各种模块 */
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const md5 = require('md5');
const svgCaptcha = require('svg-captcha');
const multer = require('multer');
/* 模块引用部分结束位置 */
const app = express();
//定义各种参数
let secret = 'sports.app.myweb.www';
// 启用中间件
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser(secret));
//模板引擎设置
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', './views');
//数据库连接
const  conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    port:3306,
    database:'examapp'
});
conn.connect();
//启用session
app.use(session({
    secret:secret,
    resave:true,
    saveUninitialized: true,
    cookie: {maxAge:30*24*3600*1000}
}));
//文件上传
const diskstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./uploads/${new Date().getFullYear()}/${(new Date().getMonth()+1).toString().padStart(2, '0')}`);
    },
    filename: function (req, file, cb) {
        let filename = new Date().valueOf() + '_' +  Math.random().toString().substr(2, 8) + '.' + file.originalname.split('.').pop();
        cb(null, filename)
    }
});
const upload = multer({storage: diskstorage});


//子路由
//管理员登录
app.use('/admin/login', require('./module/admin/login'));

//静态资源托管
app.use(express.static('static'));

app.listen(81, () => {
    console.log('成功启动...');
});
