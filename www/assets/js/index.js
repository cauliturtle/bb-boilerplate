require.config({
    appdir: "../assets/js",
    baseUrl: "../assets/js",
    paths: {
        "jquery"        : "vendor/jquery",
        "underscore"    : "vendor/underscore",
        "backbone"      : "vendor/backbone",
        "application"   : "application",
        "text"          : "vendor/text"
    },
    shim: {
        'underscore': {
            deps: ['jquery'],
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require([
    'jquery',
    'underscore',
    'backbone',
    'application'
], function($, _, BackBone, _App){
    _App.initialize();
});

