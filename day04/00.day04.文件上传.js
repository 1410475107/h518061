//基础框架 express
const express = require('express');
// 接收post数据
const bodyParser = require('body-parser');
//数据库操作模块  mysql
const mysql = require('mysql');
// 模板引擎
const ejs = require('ejs');
//文件上传模块
const multer = require('multer');

// 创建一个引用  或者  服务
const app = express();

//接收post数据
app.use(bodyParser.urlencoded({
    extended: true
}));
//数据库连接
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'h51806'
});
conn.connect();
//模板引擎设置
app.engine('html', ejs.renderFile); //定义一个模板引擎
app.set('view engine', 'html'); //注册模板引擎到express
app.set('views', './views');
// 上传文件的文件夹设置
// const upload = multer({dest:'uploads/'});
const storage = multer.diskStorage({
    destination: function (req, file, cb) { //存放路径
        //按照月份存放文件
        cb(null, `./uploads/${new Date().getFullYear()}/${(new Date().getMonth()+1).toString().padStart(2, '0')}`);
    },
    filename: function (req, file, cb) {
        let filename = new Date().valueOf() + '_' +  Math.random().toString().substr(2, 8) + '.' + file.originalname.split('.').pop();
        // originalname ：文件的原始名称，包括后缀  0.2365895665468465156  15363008071.45_633055.jpg
        cb(null, filename)
    }
});
const upload = multer({
    storage: storage
});

//各种路由请求处理
//显示上传页面
app.get('/upload', (req, res) => {
    res.render('upload');
});
// 接收上传数据  使用第三方模块  multer
app.post('/upload', upload.single('myimg'), (req, res) => {
    // req.body  
    console.log(req.file);
    res.send('文件上传成功');
});

//静态资源托管
app.use(express.static('static'));

//端口监听：网卡给引用或者服务分配的编号  
app.listen(81, () => {
    console.log('...');
});