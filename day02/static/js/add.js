//表单提交事件
$('.addstu').click(function(){
     //去掉所有的错误提示信息
     $('.has-error').removeClass('has-error');
     //姓名必填
     let err = 0;
     if(!$('#username').val()){
         $('#username').focus();
         $('#username').parent().parent().addClass('has-error');
         err++;      
     }
     if(!$('#stuid').val()){
        $('#stuid').focus();
        $('#stuid').parent().parent().addClass('has-error');
        err++;      
    }
    if(!$('#tel').val()){
        $('#tel').focus();
        $('#tel').parent().parent().addClass('has-error');
        err++;      
    }
    if(err) return false;

    //发起AJAX请求
    $.ajax({
        url:'/addstu',  //定义请求地址
        type:'POST',    //请求方式  GET 
        dataType:'JSON', //返回的数据类型
        data:$('#addstu').serialize(),  //{id:33,name:'姓名'}
        success:function(data){  //执行成功的回调函数s
            if(data.r == 'ok'){
                window.location.href = '/stulist';
            }else{
                console.log(data);
            }
        },
        fail:function(err){
            console.log(err);
        }
    });


});