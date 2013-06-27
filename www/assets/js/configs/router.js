define([
    'application',
    'backbone'
], function(_App, Backbone, Main) {
    
    var AppRouter = Backbone.Router.extend({
        routes: {
            ''          : 'index',
            'home'      : 'home',
            'about'     : 'about',
        },
        defaultRoute: function(path){
            require(['controllers/'+path+'View'], function(viewControl){
                new viewControl;
            });
        },
        index: function(){
            require([
                'controllers/indexView'
            ], function(viewControl){
                var indexView = new viewControl({
                    el: $('.content-wrapper')
                });
            });
        },
        home: function(){
            require([
                'controllers/homeView',
                'models/homeModel'
            ], function(viewControl, homeModel){
                var _homeObject = new homeModel();
                var homeView = new viewControl({
                    model: _homeObject,
                    el: $('.content-wrapper')
                });
            });
        },
        about: function(){
            require([
                'controllers/aboutView',
                'models/aboutModel'
            ], function(viewControl, aboutModel){
                var _aboutObject = new aboutModel();
                var aboutView = new viewControl({
                    model: _aboutObject,
                    el: $('.content-wrapper')
                });
            });
        }
    });

    return AppRouter;
});
