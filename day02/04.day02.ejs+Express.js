const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fs = require('fs');
//引入ejs模板引擎
const ejs = require('ejs');
const app = express();
// 接收POST过来的数据
app.use(bodyParser.urlencoded({
    extended: true
}));
//需要把ejs模板引擎注册到express
//自己定义一个模板引擎
app.engine('html', ejs.renderFile);
//注册模板引擎到express
app.set('view engine', 'html');
// 设置模板文件的存放路径
app.set('views', './static');


app.get('/list', (req, res) => {
    let stu = [{username: '刘藉穗',age: 20, info:'长得高'},
        {username: '巫晓娟',age: 21, info:'长得高,<b>会写代码</b>'},
        {username: '李露',age: 21, info:'长得高'},
        {username: '晏继梅',age: 21, info:'长得高'}
    ];

    res.render('list1.html', {stulist:stu});

   
});



//静态资源托管
app.use(express.static('static'));
//监听服务端口
app.listen(81, () => {
    console.log(`Server started on 81`);
});