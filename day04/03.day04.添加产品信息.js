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
let hostname = 'http://lulaoshi:81/';
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
    filename: function (req, file, cb) { //文件命名
        let filename = new Date().valueOf() + '_' +  Math.random().toString().substr(2, 8) + '.' + file.originalname.split('.').pop();
        // originalname ：文件的原始名称，包括后缀  0.2365895665468465156  15363008071.45_633055.jpg
        cb(null, filename)
    }
});
const upload = multer({
    storage: storage
});

app.get('/add', (req ,res)=>{
    res.render('edit.html');
});

//处理商品数据到数据库
app.post('/addpro', (req ,res)=>{
    let d = req.body;
    let sql = 'INSERT INTO products(title, price, toppic, pinfo, addtimes) VALUES (?,?,?,?,?)';
    conn.query(sql, [d.title, d.price, d.toppic, d.pinfo, new Date().toLocaleString()], (err, result)=>{
        console.log(err);
        res.json(result);
    });
});

app.get('/', (req ,res)=>{
    console.log(req.headers);
    res.send('1');
});

//处理编辑器的图片上传

// editor.customConfig.uploadImgServer = '/uploads';
// editor.customConfig.uploadFileName = 'images'
app.post('/uploads', upload.array('images', 1000), (req ,res)=>{
    console.log(req.files);
    let data = [];
    for (const ad of req.files) {
        //应该使用绝对路径
        //把反斜线转成斜线，防止各种转义引起的路径错误
        let path = hostname +  ad.path.replace(/\\/g, '/');
        data.push(path);
    }
    res.json({
        "errno": 0,
        "data": data
    });
});

//

//静态资源托管
// 托管上传的文件
app.use('/uploads',express.static('uploads'));
app.use(express.static('static'));

//端口监听：网卡给引用或者服务分配的编号  
app.listen(81, () => {
    console.log('...');
});