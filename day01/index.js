const express = require('express');
//处理POST过来的数据的中间件
const bodyParser = require('body-parser');
const app = express();
//启用中间件：body parser
app.use(bodyParser.urlencoded({extended:true}));
//接收post请求
app.post('/addstu', (req ,res)=>{
    //接收POST过来的数据
    console.log(req.body);
    //然后存到数据库
    res.json({r:'success'});
    // res.json({r:'db_err'});
});


// post




app.use(express.static('view'));
app.listen(81);