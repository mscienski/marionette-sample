require.config({
    baseUrl:"./js/app",
    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
    // probably a good idea to keep version numbers in the file names for updates checking
    paths:{
        // Core Libraries
        "jquery":"../libs/jquery",
        'spin': '../libs/spin',
        "jqueryui":"../libs/jqueryui",
        'jqspin': '../libs/spin.jquery',
        "underscore":"../libs/lodash",
        "backbone":"../libs/backbone",
        "marionette":"../libs/backbone.marionette",
        "handlebars":"../libs/handlebars",
        'localstorageadapter':'../libs/localstorage',
        'Q':'../libs/q',

        // Plugins
        'backbone.syphon':'../libs/plugins/backbone.syphon',
        "backbone.validateAll":"../libs/plugins/Backbone.validateAll",
        "bootstrap":"../libs/plugins/bootstrap",
        "text":"../libs/plugins/text"
    },
    // Sets the configuration for your third party scripts that are not AMD compatible
    shim:{
        "bootstrap":["jquery"],
        "jqueryui":["jquery"],
        "backbone":{
            "deps":["underscore"],
            // Exports the global window.Backbone object
            "exports":"Backbone"
        },
        "marionette":{
            "deps":["underscore", "backbone", "jquery"],
            // Exports the global window.Marionette object
            "exports":"Marionette"
        },
        "handlebars":{
            "exports":"Handlebars"
        },
        // Backbone.validateAll plugin (https://github.com/gfranko/Backbone.validateAll)
        "backbone.validateAll":["backbone"]
    }
});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(['Common/index', "Contact/index", "ContactList/index", 'ContactShow/index', 'Panel/index', 'About/index', 'App', "jquery", "jqueryui", "bootstrap", "backbone.validateAll", 'localstorageadapter'],
    function (Common, Contact, ContactList, ContactShow, Panel, AboutApp, App) {
        App.start();
    });