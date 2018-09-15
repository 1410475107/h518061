const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');
const async = require('async');
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

app.get('/k', (req, res) => {
    //任务一  查询总条数
    // 任务二  查询当前页数要显示的记录
    //定义每页显示多少条
    let pagenum = 20;
    // 当前是第几页  默认页数是 1
    let page = req.query.page ? req.query.page : 1;
    (page < 1) && (page = 1);
    async.series({
        totalnums: function (cb) {
            let sql = 'SELECT COUNT(id) AS totalnums FROM top20';
            conn.query(sql, (err, result) => {
                //判断当前也是是否大于总页数
                let totalpage = Math.ceil(result[0].totalnums / pagenum);
                if (page > totalpage) {
                    page = totalpage;
                }
                cb(null, result[0].totalnums);
            });
        },
        lists: function (cb) {
            //查询50条显示到页面上
            let sql = 'SELECT * FROM top20 LIMIT ?, ?';
            conn.query(sql, [pagenum * (page - 1), pagenum], (err, results) => {
                cb(null, results);
            });
        }
    }, (err, data) => {
        // 传递页数
        data.page = page;
        //计算总页数  向上取整
        data.totalpage = Math.ceil(data.totalnums / pagenum);
        //要循环的页数 起始位置 和  结束位置  
        /*
            End  -  start  = Showpage – 1
            End  - Showpage +1 = start  
            Start = page –(Showpage – 1)/2;  开始页数
            End = page + (Showpage – 1)/2;   结束页数
        */
        let showpage = 9;
        let start = page - (showpage - 1) / 2;
        let end = page * 1 + (showpage - 1) / 2;
        if (start < 1) {
            start = 1;
            end = start + showpage - 1;
        }
        if (end > data.totalpage) {
            end = data.totalpage;
            start = end - showpage + 1;
            if (start < 1) {
                start = 1;
            }
        }
        data.start = start;
        data.end = end;
        res.render('k', data);
    });

})


//静态资源托管
app.use(express.static('static'));
//端口监听  端口不能重复
app.listen(81);