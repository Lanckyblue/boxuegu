/**
 * Created by Chen-ACER on 2017/2/25.
 */
requirejs.config({
    baseUrl: '/',
    paths: {

        //第三方库的路径配置
        jquery: '/lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        common: '/js/common/common',
        jqueryCookie: 'lib/jquery-cookie/jquery.cookie',
        echarts: '/lib/echarts/echarts.common.min',
        nprogress: 'lib/nprogress/nprogress',
        template: 'lib/artTemplate-3.0.1/template',

        // 自己写的路径配置
        index: 'js/index',

        userList: 'js/user/list',
        userProfile: 'js/user/profile',

        teacherList: 'js/teacher/list',
        teacherAdd: 'js/teacher/add',

        homeLogin: 'js/home/login',
        homeRepass: 'js/home/repass',
        homeSettings: 'js/home/settings',

        courseAdd: 'js/course/add',
        courseAddStep1: 'js/course/add_step1',
        courseAddStep2: 'js/course/add_step2',
        courseAddStep3: 'js/course/add_step3',
        courseCategory: 'js/course/category',
        courseCategoryAdd: 'js/course/category_add',
        courseList: 'js/course/list',
        courseTopic: 'js/course/topic',

        advertList: 'js/course/list',
        advertAdd: 'js/course/add',
    },

    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require(['nprogress'], function(nprogress){
    nprogress.start();
});

//所有页面都需要这两个js，先加载他们
require(['jquery', 'bootstrap', 'common']);

// 这里获取页面的pathname，然后对应的加载js
(function(window){

    var pathname = window.location.pathname;

    require(['jquery', 'jqueryCookie'], function($, undefined){
        var sessID = $.cookie('PHPSESSID');

        if(pathname === '/html/home/login.html' && sessID){
            location.href = '/';
        }else if(pathname !== '/html/home/login.html' && !sessID){
            location.href = '/html/home/login.html';
        }

        switch (pathname){
            //user
            case '/html/user/list.html':
                require(['userList']);
                break;
            case '/html/user/profile.html':
                require(['userProfile']);
                break;

            // teacher
            case '/html/teacher/list.html':
                require(['teacherList']);
                break;
            case '/html/teacher/add.html':
                require(['teacherAdd']);
                break;

            // home
            case '/html/home/login.html':
                require(['homeLogin']);
                break;
            case '/html/home/repass.html':
                require(['homeRepass']);
                break;
            case '/html/home/settings.html':
                require(['homeSettings']);
                break;

            //course
            case '/html/course/add.html':
                require(['courseAdd']);
                break;
            case '/html/course/add_step1.html':
                require(['courseAddStep1']);
                break;
            case '/html/course/add_step2.html':
                require(['courseAddStep2']);
                break;
            case '/html/course/add_step3.html':
                require(['courseAddStep3']);
                break;
            case '/html/course/category.html':
                require(['courseCategory']);
                break;
            case '/html/course/category_add.html':
                require(['courseCategoryAdd']);
                break;
            case '/html/course/list.html':
                require(['courseList']);
                break;
            case '/html/course/topic.html':
                require(['courseTopic']);
                break;

            // advert
            case '/html/advert/add.html':
                require(['advertAdd']);
                break;
            case '/html/advert/list.html':
                require(['advertList']);
                break;

            // index
            case '/':
                require(['index']);
                break;
            case '/index.html':
                require(['index']);
                break;
        }
    });

})(window);