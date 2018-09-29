/*各种模块 */
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const multer = require('multer');
/* 模块引用部分结束位置 */
const app = express();
//模板引擎设置
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', './views');

//接收post过来的数据
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.render('index');
});
let hostname = 'http://lulaoshi:81/';
//文件上传
const diskstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./uploads/${new Date().getFullYear()}/${(new Date().getMonth()+1).toString().padStart(2, '0')}`);
    },
    filename: function (req, file, cb) {
        let filename = new Date().valueOf() + '_' +  Math.random().toString().substr(2, 8) + '.' + file.originalname.split('.').pop();
        cb(null, filename)
    }
});
const upload = multer({storage: diskstorage});

app.post('/uploads', upload.array('images', 1000), (req ,res)=>{
    console.log(req.files);
    let data = [];
    for (const ad of req.files) {
        //把反斜线转成斜线，防止各种转义引起的路径错误
        let path = hostname +  ad.path.replace(/\\/g, '/');
        data.push(path);
    }
    res.json({
        "errno": 0,
        "data": data
    });
});


app.get('/getstudents', (req, res) => {
    res.json([{name:'刘桐'},{name:'曹华胜'},{name:'张明浩'}]);
});

app.post('/search', (req, res) => {
	console.log(req.body);
    res.json([{name:req.body.username}]);
});




//静态资源托管
app.use('/uploads', express.static('uploads'));
app.use(express.static('static'));
app.listen(81, () => {
    console.log('成功启动...');
});
