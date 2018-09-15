global.express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
//创建了一个应用
const app = express();
//接收POST数据
app.use(bodyParser.urlencoded({
    extended: true
}));
//模板引擎注册
app.engine('html', ejs.renderFile); //自定义一个模板引擎
app.set('view engine', 'html'); //注册模板引擎到express
app.set('views', './views'); //指定模板所在的文件夹

app.get('/my', (req ,res)=>{
    res.send('123');
});
//创建一个子路由：创建一个miniApp

//启用子路由
app.use('/student', require('./module/student')());

//创建一个新的模块   成绩管理
app.use('/score', require('./module/score'));

//创建一个新的模块   成绩管理
app.use('/admin', require('./module/admin'));

//静态资源托管
app.use(express.static('static'));
app.listen(81);