const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
// 接收POST过来的数据
app.use(bodyParser.urlencoded({
    extended: true
}));

//数据库连接  后面的数据库操作都可以使用这个连接
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    port:3306,
    database:'h51806'
});
conn.connect();

//处理一个POST请求：添加学生信息
app.post('/addstu', (req ,res)=>{
    console.log(req.body);
    //把数据保存数据库  mysql
    let d =req.body;
    let sql = `INSERT INTO students(username, stuid, tel, addtimes) VALUES (?,?,?,?)`;
    //"${d.username}", "${d.stuid}", "${d.tel}", "${new Date().toLocaleString()}"
    conn.query(sql, [d.username, d.stuid, d.tel, new Date().toLocaleString()], (err, result)=>{
        //如果执行错误，打印错误信息  如果没有错误，err是  null
        if(err){
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        console.log(result);
        res.json({r:'ok'});
    });
});

//学生列表信息
app.get('/stulist', (req ,res)=>{
    //到数据库里面把数据查出来
    let sql= `SELECT username, stuid, tel, addtimes FROM students WHERE 1`;
    conn.query(sql, (err, results)=>{
        if(err){
            console.log(err);
            res.send({r:'db_err'});
            return ;
        }
        console.log(results);
        // res.send(results[0].addtimes.toLocaleString());
        res.send(results);

    });
});

//静态资源托管
app.use(express.static('static'));
//监听服务端口
app.listen(81, () => {
    console.log(`Server started on 81`);
});