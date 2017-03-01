define(['jquery', 'jqueryCookie', 'common', 'nprogress'], function($, undefined, undefined, nprogress){

    nprogress.done();

    var userInfo = null;
    try{
        userInfo = JSON.parse($.cookie('userInfo'))
    }catch(e){
        userInfo = {};
    }
    $('.login .avatar img').attr('src', userInfo.tc_avatar ? userInfo.tc_avatar : '/img/images/default.png');

    /**
     * 1、监听form表单的提交事件
     * 2、事件回调中return false阻止默认的提交
     * 3、事件回调中通过ajax的方式发送表单数据
     * 4、如果返回结果中的code为200，证明登陆成功，跳转到首页
     */

    $('#form-login').on('submit', function(){

        $.ajax({
            url: '/v6/login',
            type: 'post',
            data: $(this).serialize(),
            success: function(data){
                if(data.code === 200){
                    //如果登陆成功，使用cookie的方式保存用户信息，
                    //注意：cookie的值必须是字符串
                    $.cookie('userInfo', JSON.stringify(data.result), {path: '/'});
                    location.href = '/';
                }
            }
        })
        return false;
    });
});