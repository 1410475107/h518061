const express = require('express');
const fs = require('fs');
const async = require('async');

const server = express();
/*
server.get('/', (req, res) => {
    let d = '';
    fs.readFile('./a.txt', (err, str) => {
        d += str.toString();
        fs.readFile('./b.txt', (err, str) => {
            d += str.toString();
            fs.readFile('./c.txt', (err, str) => {
                d += str.toString();
                res.send(d);
            });
        });
    });
});
*/
server.get('/', (req, res) => {
    //实现同步  形参一  任务：object   形参二  任务执行完成后的操作：fn
    async.series({
        work2000: function (callback) {
            fs.readFile('./a.txt', (err, str) => {
                //结构性要求：任务函数必须有一回调函数  如果没有callback  任务不会接着向下执行
                callback(null, str.toString());
            });
        },
        work2: function (cb) {
            fs.readFile('./b.txt', (err, str) => {
                cb(null, '刘桐');
            });
        },
        work3: function (cb) {
            fs.readFile('./c.txt', (err, str) => {
                cb(null,[1,2,3,4,{a:1,b:2}]);
            });
        }
    }, (err, result) => {
        console.log(result);
        res.send(result);
    });
});
server.listen(81);