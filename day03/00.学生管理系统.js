const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');
const bodyParser = require('body-parser');

//创建一个引用  application 
const app = express();
//接收POST数据
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
//打开数据库连接
conn.connect();
//模板引擎注册
app.engine('html', ejs.renderFile); //自定义一个模板引擎
app.set('view engine', 'html'); //注册模板引擎到express
app.set('views', './views'); //指定模板所在的文件夹

// 登录页面
app.get('/login', (req, res) => {
    res.render('login');
});
//登录处理
app.post('/login', (req, res) => {
    // 各种数据验证
    let data = req.body;
    let sql = 'SELECT aid, username, passwd FROM admin WHERE username = ? LIMIT 0, 1';
    conn.query(sql, data.username, (err, result) => {
        if (err) {
            console.log(err);
            res.json({
                r: 'db_err'
            });
            return;
        }
        //验证账号是否存在
        if (!result.length) {
            res.json({
                r: 'username_not_exist'
            });
            return;
        }
        //验证密码是否正确
        if (data.passwd != result[0].passwd) {
            res.json({
                r: 'passwd_err'
            });
            return;
        }
        //处理最后一次登录时间和登录次数
        let usql = `UPDATE admin SET lasttimes = ?, loginnums = loginnums + 1 WHERE aid = ?`;
        conn.query(usql, [new Date().toLocaleString(), result[0].aid], (err, result) => {
            console.log(err);
            res.json({
                r: 'success'
            });
        });
    });
});

//管理页面
app.get('/index', (req, res) => {
    let sql = 'SELECT * FROM students WHERE status = 1';
    conn.query(sql, (err, students) => {
        let data = {};
        data.students = students;
        res.render('list', data);
    });
});
//删除操作
app.get('/delstu', (req, res) => {
    let sid = req.query.sid;
    let sql = 'UPDATE students SET status = 0 WHERE sid = ?';
    conn.query(sql, sid, (err, result) => {
        res.json({
            result: 'ok'
        });
    });
});

// 显示修改页面
app.get('/updstu', (req, res) => {
    //获取原始信息
    let sid = req.query.sid;
    let sql = 'SELECT * FROM students WHERE sid = ?'
    conn.query(sql, sid, (err, result) => {
        if (err) {
            res.send('系统性错误，请稍后重试');
            return;
        }
        // let data = {};
        // data.student = result[0];
        res.render('updstu', result[0]);
    });

});
//提交修改数据到数据库
app.post('/updstu', (req, res) => {
    //获取原始信息
    let d = req.body;
    let sql = 'UPDATE students SET username = ? , stuid = ?, tel = ? WHERE sid = ?'
    conn.query(sql, [d.username, d.stuid, d.tel, d.sid], (err, result) => {
        if (err) {
            res.send('系统性错误，请稍后重试');
            return;
        }
         res.json({r123:'chenggong'});
    });
});

//静态资源托管
app.use(express.static('static'));
//端口监听  端口不能重复
app.listen(81);