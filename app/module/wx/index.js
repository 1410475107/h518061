const express = require('express');
const async = require('async');
const router = express.Router();
const request = require('request');
//首页路由
router.get('/qlist', (req, res)=>{
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
         data.questions = result.questions;
         data.page = page;
         res.json(data);
     });

});



router.get('/getmylist', (req, res)=>{
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
             //查询我做过的题
             let sql = `SELECT a.*, q.*, c.catename FROM answer AS a 
						LEFT JOIN  questions AS q  ON a.qid = q.qid 
						LEFT JOIN category AS c ON q.cid = c.cid 
						WHERE a.openid = ? LIMIT ?, ?`;
             conn.query(sql, [req.query.openid, pagenum*(page-1), pagenum], (err, results)=>{
                 callback(null, results);
             });
         }
     }, (err, result) => {
         data.questions = result.questions;
         data.page = page;
         res.json(data);
     });

});

//试题详情

router.get('/qinfo', (req, res)=>{
    // 查询试题数据
     //当前页数
     let data={};
 
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
         res.json(result.qinfo);
     });

});

router.post('/doit', (req, res)=>{
	//我怎么知道是谁在做题 
	//记录数据
	let pd = req.body;
	let sql = 'INSERT INTO answer(qid, openid, answer, addtimes) VALUES(?,?,?,?)';
	conn.query(sql, [pd.qid, pd.openid, pd.answer, new Date().toLocaleString()], (err, results)=>{
		
		//返回下一题的qid
		//8   15   60   82
		let nsql = 'SELECT * FROM questions WHERE status=1 AND qid > ? ORDER BY qid ASC LIMIT 1';
		conn.query(nsql, pd.qid, (err, result)=>{
			 res.json({r:'ok', qinfo:result[0]});
		 });
	});
	
});



router.get('/members', (req, res)=>{
	let code = req.query.code;
	let appid = 'wx07a8710b1096a95b';
	let secret = '5e78a6ba3f9040ef7e26f1f4be84e2d5';
	request(`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`, function (error, response, body) {
	  console.log('error:', error);
	  console.log('statusCode:', response && response.statusCode);
	  console.log('body:', body);
	  //效应数据到小程序
	  res.json({openid:JSON.parse(body).openid});
	});
	
});



/*
http://lulaoshi:81/wx/qlist?page=2    获取试题列表的接口
http://lulaoshi:81/wx/qinfo           获取试题详情的接口
http://lulaoshi:81/wx/doit 			  提交答案的接口						
*/

module.exports = router;