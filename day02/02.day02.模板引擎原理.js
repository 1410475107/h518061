const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fs = require('fs');
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

app.get('/list', (req ,res)=>{
    let stu = {username:'刘藉穗', age:20};
    stu = {username:'巫晓娟', age:21};
    //读取模板文件
    fs.readFile('./static/stu.html', (err, data)=>{
        res.writeHeader(200, {
            'Content-type':'text/html;charset="UTF-8"'
        });
        res.write(data.toString().replace('%username%', stu.username).replace('%age%', stu.age));
        res.end();
    });
   

});



//静态资源托管
app.use(express.static('static'));
//监听服务端口
app.listen(81, () => {
    console.log(`Server started on 81`);
});