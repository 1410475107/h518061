const express = require('express');
module.exports = function(){
    const  router = express.Router();
    
    router.get('/',(req ,res)=>{
        res.send('学生管理首页');
    });
    router.get('/add',(req ,res)=>{
        res.send('学生信息添加');
    });
    router.get('/updstu',(req ,res)=>{
        res.send('修改信息');
    });

    return router;
}