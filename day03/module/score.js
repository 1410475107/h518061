const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('成绩管理首页');
});
router.get('/select', (req, res) => {
    res.send('成绩查询');
});


//导出子路由
module.exports = router;