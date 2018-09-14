const express = require('express');
const ejs = require('ejs');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
//数据接收
app.use(bodyParser.urlencoded({extended: true}));
//数据库连接
const mydb = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    port:3306,
    database:'h51806'
});
mydb.connect();

//模板引擎设置
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', './static');

//学生列表信息
app.get('/list', (req ,res)=>{
    let sql = 'SELECT * FROM students WHERE status = 1';
    mydb.query(sql, (err, results)=>{
        if(err){
            console.log(err);
            res.send('数据库错误');
            return ;
        }
        let data = {};
        data.stulist = results;
        res.render('list', data);
    });
});
//删除学生信息
app.get('/delstu', (req, res)=>{
    //接收要删除的学生的id
    let sid = req.query.sid;
    // let sql = `DELETE  FROM students WHERE sid = ?`;
    let sql = `UPDATE students SET status = 0 WHERE sid = ?`;
    mydb.query(sql, sid, (err, result)=>{
        if(err){
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        res.json({r:'success'});
    });

});



app.use(express.static('static'));
app.listen(81);
