// const express = require('express');
const router = express.Router();

router.get('/login', (req ,res)=>{
    res.render('login1');
});

//登录数据处理
router.post('/login', (req ,res)=>{
    res.send(req.body);
});


module.exports = router;