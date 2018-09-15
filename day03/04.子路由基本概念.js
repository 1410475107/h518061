const express = require('express');
//创建了一个应用
const app = express();

app.get('/my', (req ,res)=>{
    res.send('123');
});
//创建一个子路由：创建一个miniApp
const  miniApp = express.Router();
//启用子路由
app.use('/student', miniApp);
    
    miniApp.get('/',(req ,res)=>{
        res.send('学生管理首页');
    });
    miniApp.get('/add',(req ,res)=>{
        res.send('学生信息添加');
    });
    miniApp.get('/updstu',(req ,res)=>{
        res.send('修改信息');
    });

//创建一个新的模块   成绩管理
const scoreApp = express.Router(); 
app.use('/score', scoreApp);
    scoreApp.get('/', (req ,res)=>{
        res.send('成绩管理首页');
    });
    scoreApp.get('/select', (req ,res)=>{
        res.send('成绩查询');
    });


app.listen(81);