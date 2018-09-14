window.onload = function(){
    let btn = document.querySelector('.login');
    btn.onclick = function(){
        //检查用户是否输入  自己写


        // 发起ajax请求
        let username = document.querySelector('#username').value;
        let passwd = document.querySelector('#passwd').value;
        let xhr = new XMLHttpRequest();
        xhr.open('post', '/login');
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Content-Type', 'application/json');
        let data = {username:username, passwd:passwd};
        xhr.send(JSON.stringify(data));
        xhr.onreadystatechange = function () {
            if(xhr.readyState==4 && xhr.status==200){
                let data = JSON.parse(xhr.responseText);
                console.log(data);
                //根据返回数据 进行各种 提示
            }
        }
    }
}