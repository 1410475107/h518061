const express = require('express');
const async = require('async');
const router = express.Router();

//首页路由
router.get('/', (req, res)=>{
    // 查询试题数据
     //当前页数
     let data={};
     let pagenum = 10;
     data.pagenum = pagenum;
 
     let page = req.query.page ? req.query.page : 1;
     data.page = page;
     async.series({
         //获取分类
         catelist:function (callback) {
            let sql = 'SELECT * FROM category WHERE status = 1';
            conn.query(sql, (err, results)=>{
                callback(null, results);
            });
        },
         count: function (callback) {
             let sql = 'SELECT COUNT(*) AS nums FROM questions WHERE status = 1';
             conn.query(sql, (err, result) => {
                 callback(null, result[0].nums);
             });
         },
         questions:function (callback) {
             //查询分类信息
             let sql = 'SELECT q.*, c.catename FROM questions AS q  LEFT JOIN category AS c ON q.cid = c.cid WHERE q.status = 1 LIMIT ?, ?';
             conn.query(sql, [pagenum*(page-1), pagenum], (err, results)=>{
                 callback(null, results);
             });
         }
     }, (err, result) => {
         data.count = result.count;
         data.questions = result.questions;
         data.catelist = result.catelist;
         res.render('front/questions', data);
     });

});

//试题详情

router.get('/qinfo', (req, res)=>{
    // 查询试题数据
     //当前页数
     let data={};
     let pagenum = 10;
     data.pagenum = pagenum;
 
     let page = req.query.page ? req.query.page : 1;
     data.page = page;
     async.series({
         //获取分类
         catelist:function (callback) {
            let sql = 'SELECT * FROM category WHERE status = 1';
            conn.query(sql, (err, results)=>{
                callback(null, results);
            });
        },
         count: function (callback) {
             let sql = 'SELECT COUNT(*) AS nums FROM questions WHERE status = 1';
             conn.query(sql, (err, result) => {
                 callback(null, result[0].nums);
             });
         },
         qinfo:function (callback) {
             //查询分类信息
             let sql = 'SELECT q.*, c.catename FROM questions AS q  LEFT JOIN category AS c ON q.cid = c.cid WHERE q.status = 1 AND q.qid=?';
             conn.query(sql, req.query.qid, (err, result)=>{
                 callback(null, result[0]);
             });
         }
     }, (err, result) => {
         data.count = result.count;
         data.qinfo = result.qinfo;
         data.catelist = result.catelist;
         res.render('front/qinfo', data);
     });

});


module.exports = router;