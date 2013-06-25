/* About View Control */
define([
    'application',
    'text!templates/page.html'
], function(App, htmlPage){
    var viewControl = Backbone.View.extend({
        template: htmlPage,
        initialize: function(){
            var that = this;
            this.model.fetch({
                success: function(){
                    that.rendor();
                },
                error: function(){
                    App.showError();
                }
            })
        },
        rendor: function(){
            var html = _.template(this.template, this.model.attributes);
            $(this.el).html(html);
            return this;
        }
    });
    
    return viewControl;
});