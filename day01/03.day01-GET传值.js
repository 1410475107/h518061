//使用第三方
const  express = require('express');
// 创建服务
const  app = express();
app.get('/student', (req, res)=>{
    console.log(req.query);
    console.log(req.query.username);
    res.send('学生信息');
});

// 静态资源托管   html  css  js  img  video  audio 等
app.use(express.static('view'));
//端口监听
app.listen(81);


