/**
 * Created by Chen-ACER on 2017/2/25.
 */
requirejs.config({
    baseUrl: '/',
    paths: {

        //���������·������
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
    },

    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

//����ҳ�涼��Ҫ������js���ȼ�������
require(['jquery', 'bootstrap']);

