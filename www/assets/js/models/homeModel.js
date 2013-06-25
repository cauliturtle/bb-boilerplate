define([
    'application'
], function(App){
    var appModel = Backbone.Model.extend({
        url: App.apiEndPoint.home
    });
    
    return appModel;
});