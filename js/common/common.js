
	//NProgress.start();
    //
	//NProgress.done();
define(['jquery', 'jqueryCookie'], function($, undefined){

	// ajax请求loading
	$(document).ajaxStart(function(){
		$('.overlay').show();
	}).ajaxStop(function(){
		setTimeout(function(){
			$('.overlay').hide();
		},1000);
	});

	// 左侧导航下拉列表
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	// 点击左侧导航栏下拉选项后不合上
	var pathname = window.location.pathname;
	$('.navs a').removeClass('active').filter('[href="' + pathname + '"]').addClass('active').parents('ul').show();

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
