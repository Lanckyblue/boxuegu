
	//NProgress.start();
    //
	//NProgress.done();
define(['jquery'], function($){
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	$.ajax({
		url: '/v6/login',
		type: 'post',
		data: {
			tc_name: 123456,
			tc_pass: 123456
		},
		success: function(){
			console.log('成功了');
		},
		error: function(){
			console.log('失败了');
		}
	});
});
