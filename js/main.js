/**
 * Created by Chen-ACER on 2017/2/25.
 */
requirejs.config({
    baseUrl: '/',
    paths: {

        //第三方库的路径配置
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
    },

    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

//所有页面都需要这两个js，先加载他们
require(['jquery', 'bootstrap']);

