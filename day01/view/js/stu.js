window.onload = function () {
    let btn = document.querySelector('.getstus');
    btn.onclick = function(){
        //把数据获取过来
        let xhr = new XMLHttpRequest();
        xhr.open('post', '/getstus123', true);
        xhr.send();
        //事件监听  状态改变事件
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status==200){
                let data = JSON.parse(xhr.responseText);
                //循环数组
                // console.log(data);
                let str = '';
                for (const stu of data) {
                    str += `<li>姓名：${stu.username}，性别：${stu.general}</li>`;
                }
                //一次性追加
                document.querySelector('ol').innerHTML = str;
            }
        }
    }
}