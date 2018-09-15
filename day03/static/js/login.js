//整个页面加载
$(function(){
    let btn = $('.login');
    btn.click(function () {
        $('.mytip').html('');
        let username = $('#username');
        let passwd = $('#passwd');
        if(!username.val()){
            username.focus().next('span').html('账号必填');
            return ;
        }

        if(!passwd.val()){
            passwd.focus().next('span').html('密码必填');
            return ;
        }
        //ajax操作
        $.ajax({
            url:'/login',
            type:'post',
            dataType:'json',
            data:{username:username.val(), passwd:passwd.val()},
            success:function(data){
                console.log(data);
                //登录成功跳转到管理页面
                if(data.r == 'success'){
                    window.location.href = '/index';
                }else if(data.r == 'username_not_exist'){  //账号不存在
                    username.focus().next('span').html('账号不存在');
                }else if(data.r == 'passwd_err'){  //账号不存在
                    passwd.focus().next('span').html('密码错误');
                }else{
                    alert('未知错误，请刷新后重试');
                    window.location.reload();
                }
            }
        });

    });
});