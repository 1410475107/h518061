/*各种模块 */
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
/* 模块引用部分结束位置 */
const app = express();
//模板引擎设置
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', './views');

//接收post过来的数据
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('index');
});


app.get('/person', (req, res) => {
    res.render('person');
});

app.get('/api', (req, res) => {
    res.render('api');
});


app.get('/article', (req, res) => {
    res.render('article');
});


app.get('/cookie', (req, res) => {
    res.render('cookie');
});


app.get('/s1', (req, res) => {
    res.render('storage1');
});

app.get('/s2', (req, res) => {
    res.render('storage2');
});

app.get('/s3', (req, res) => {
    res.render('storage3');
});






//静态资源托管
app.use(express.static('static'));
app.listen(81, () => {
    console.log('成功启动...');
});
