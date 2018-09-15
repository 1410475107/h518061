const express = require('express');
const fs = require('fs');
const async = require('async');

const server = express();

server.get('/', (req, res) => {
    //实现同步  参数一  任务：array   参数二  任务执行完成后的操作：fn
    async.waterfall([
        function(cb){
            cb(null, 1);
        },
        function(num, callback){
            console.log(num);
            callback(null, [num, 2]);
        },
        function(arr, cb){
            console.log(arr);
            arr.push(3);
            // cb(null, arr);
        }
    ], (err, result)=>{
        console.log(result);
        res.send(result);
    });
});
server.listen(81);