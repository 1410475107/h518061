$(function () {
    //应该用事件代理  删除学生信息
    $('.tbody').on('click', '.delstu', function () {
        //删除是危险操作
        if (!confirm('是否确定删除')) {
            return;
        }
        let _this = $(this);
        console.log(_this.attr('sid'));
        //发起ajax请求
        $.ajax({
            url: '/delstu',
            type: 'GET',
            dataType: 'json',
            data: {
                sid: _this.attr('sid')
            },
            success: function (data) {
                console.log(data);
                if (data.result == 'ok') {
                    _this.parent().parent().remove();
                }

            }
        });
    });

    //修改学生信息
    $('.updstu').click(function(){
        //各种验证
        $.ajax({
            url:'/updstu',
            type:'POST',
            dataType:'JSON',
            data:$('#updstu').serialize(), //这个时候要求必须设置input的name属性
            success:function (result) {
                if(result.r123 == 'chenggong'){
                    window.location.href = '/index';
                }else{
                    alert('未知错误，请刷新后重新操作');
                }
            }

        });

    });

});