const express = require('express');
const  server = express();
//各种路由请求


//静态资源托管
server.use(express.static('view'));

server.listen(81);