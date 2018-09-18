$(function () {
    let form = layui.form;
    // 添加分类
    form.on('submit(addcate)', function(data){
        $.ajax({
            url: '/admin/addcategory',
            type: 'POST',
            dataType: 'JSON',
            data: $('#addcate').serialize(),
            // data:data.field,
            success: function (result) {
                console.log(result);
            }
        });
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
      });

       // 修改分类
    form.on('submit(updatecate)', function(data){
        $.ajax({
            url: '/admin/updatecate',
            type: 'POST',
            dataType: 'JSON',
            data: $('#updatecate').serialize(),
            // data:data.field,
            success: function (result) {
                console.log(result);
            }
        });
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
      });

      //分类删除
      $('.catelist').on('click', '.delcate', function(){
          //这里应该有删除确定提示--TODO
          console.log($(this).attr('cid'));
          let cid = $(this).attr('cid');
          $.ajax({
            url: '/admin/delcate',
            type: 'GET',
            dataType: 'JSON',
            data: {cid:cid},
            success: function (result) {
                console.log(result);
                if(result.r =='success'){
                    window.location.reload();
                }
            }
        });
      });
});