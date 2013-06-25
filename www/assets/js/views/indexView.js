/* Index View Control */
define([
    'application',
    'text!templates/index.html'
], function(App, htmlIndex){
    var viewControl = Backbone.View.extend({
        initialize: function(){
            this.rendor();
        },
        rendor: function(){
            var html = _.template(htmlIndex, {});
            $(this.el).html(html);
            return this;
        }
    });
    
    return viewControl;
});