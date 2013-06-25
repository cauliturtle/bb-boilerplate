/* App View Control */
define([
    'application'
], function(App){
    var viewControl = Backbone.View.extend({
        initialize: function(){
            this.rendor();
        },
        rendor: function(){
            return this;
        }
    });
    
    return viewControl;
});