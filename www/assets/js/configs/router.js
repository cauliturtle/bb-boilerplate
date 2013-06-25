define([
    'application',
    'backbone',
    'controllers/main'
], function(_App, Backbone, Main) {
    
    var AppRouter = Backbone.Router.extend({
        initialize: function(options) {
            
            this.route("", "index", function() {
                Main.index();
            });
            
            this.route("home", "home", function() {
                Main.home();
            });
            
            this.route("about", "about", function(){
                Main.about();
            });
        }
    });

    return AppRouter;
});
