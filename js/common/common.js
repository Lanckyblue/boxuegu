
	//NProgress.start();
    //
	//NProgress.done();
define(['jquery', 'jqueryCookie'], function($, undefined){
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	// 退出功能
	$('#logout').on('click', function(){

		$.post('/v6/logout', function(data){
			if(data.code == 200){
				location.href = '/html/home/login.html';
			}
		});
	});

	//获取本地cookie用户信息，然后展示到左导航栏
	var userInfo = null;
	try{
		userInfo = JSON.parse($.cookie('userInfo'));
	}catch(e){
		userInfo = {};
	}

	$('.aside .profile h4').html(userInfo.tc_name ? userInfo.tc_name : 'noName');
	$('.aside .profile img').attr('src', userInfo.tc_avatar ? userInfo.tc_avatar : '/img/uploads/avatar.jpg')
});
