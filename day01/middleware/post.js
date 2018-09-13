module.exports = (req, res, next) => {
    let body = '';
    req.on('data', (str) => {
        body += str;
    });
    req.on('end', () => {
        //保留一个接口  下面的方法都可以使用
        req.body = body;
        //继续往下执行  非阻塞
        next();
    });
}