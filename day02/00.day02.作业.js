const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//显示登录页面
//接收POST过来的数据
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//登录验证
app.post('/login', (req ,res)=>{
    let members = {'彭剑锋':'123456','徐建':'000123','任敏':'7896322','李强':'000000'};
    console.log(req.body);
    let  username = req.body.username;
    let passwd = req.body.passwd;
    //验证账号是否存在
    if(!members.hasOwnProperty(username)){
        res.json({r:'username_not_exist'});
        return ;
    }
    //检查密码是否正确
    if(passwd != members[username]){
        res.json({r:'passwd_err'});
        return ;
    }
    res.json({r:'ok'});
});

app.use(express.static('static'));

app.listen(81, () => {
    console.log('App listening on port 81!');
});