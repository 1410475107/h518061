const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const ejs = require('ejs');
//创建服务
const server = express();

//接收post过来的数据
server.use(bodyParser.urlencoded({extended: true}));

//数据库连接
const conn = mysql.createConnection({
    host:'127.0.0.1',  //http://1410475107.mysql.dbserver.com.cn
    user:'root',
    password:'123456',
    port:3306,
    database:'h51806'
});
conn.connect();

//模板引擎
server.engine('html', ejs.renderFile);  //自定义模板引擎
server.set('view engine', 'html');  //注册模板引擎到express
server.set('views', './static');    //指定模板文件路径

//添加学生信息页面
server.get('/add', (req ,res)=>{
    res.render('add');//ejs模板引擎会处理一遍
});
//获取学生信息列表
server.get('/list', (req ,res)=>{
    // 到数据库里面查询数据
    let sql = `SELECT * FROM students`;
    conn.query(sql, (err, results)=>{
        if(err){
            console.log(err);
            res.send('数据库操作操作');
            return ;
        }
        // res.send(results);
        let data = {};
        data.stulist = results;
        res.render('list', data);
    });
});

// 静态资源托管
server.use(express.static('static'));
// 端口监听
server.listen(81);