//引入express  1
const express = require('express');
//引入body-parser  5
const bodyParser = require('body-parser');

//创建一个应用 3 
const app = express();
//启用bodyparser中间件  接收所有POST过来的数据
app.use(bodyParser.urlencoded({
    extended: true
}));
//响应学生信息
app.post('/getstus123', (req, res) => {
    res.json([{
        username: '张立',
        general: '男'
    }, {
        username: '王伟',
        general: '男'
    }, {
        username: '夏敏',
        general: '女'
    }, {
        username: '王兰',
        general: '女'
    }, {
        username: '张立1',
        general: '男'
    }, {
        username: '张立2',
        general: '男'
    }]);
});

//静态资源托管 4
app.use(express.static('view'));
//端口监听  2  
app.listen(81);