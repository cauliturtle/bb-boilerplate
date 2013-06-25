define([
    'application'
], function(_App){
    var controllers = {
        index: function(){
            require([
                'views/indexView'
            ], function(viewControl){
                var indexView = new viewControl({
                    el: $('.content-wrapper')
                });
            });
        },
        home: function(){
            require([
                'views/homeView',
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
                'views/aboutView',
                'models/aboutModel'
            ], function(viewControl, aboutModel){
                var _aboutObject = new aboutModel();
                var aboutView = new viewControl({
                    model: _aboutObject,
                    el: $('.content-wrapper')
                });
            });
        }
    };
    
    return controllers;
    
});