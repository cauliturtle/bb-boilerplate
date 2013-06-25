define([
    'jquery',
    'configs/endpoint',
    'configs/router'
],function($, apiEndPoint, Router){
    
    var App = {
        isInitialized: false,
        viewport: {
            width  : $(window).width(),
            height : $(window).height()
        }
    };

    App.initialize = function(){
        
        var that = this;
        
        that.apiEndPoint = apiEndPoint;
        
        require([
            'views/appView'
        ], function(appView){
             
            var appView = new appView({
                el: $('body')
            })

            App.Router = new Router;
            App.Router.initialize();
            Backbone.history.start({
                hashChange: true,
                root: "/"
            });
        });
    };
    
    App.showError = function(options){
        var defaultError = {
            error_title     : 'Oops',
            error_message   : 'Oops, some error ouccrs, please try again!',
            error_code      : 1
        };
    };
    
    // Set Product list after set up
    App.setProductList = function(list){
        App.filterList = list;
    };

    // Show the html content
    App.showContent = function(element, content){
        $(element)
            .empty()
            .html(
                $('<div class="content-wrapper">')
                    .hide()
                    .html(content)
                    .fadeIn());
    };
    
    return App;
    
});