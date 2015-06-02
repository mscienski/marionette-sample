'use strict';
define(['App', 'backbone', 'marionette', 'jquery', 'underscore','../views/About'],
    function(App, Backbone, Marionette, $, _, AboutVoew) {
        App.module('AboutApp.Show', function(Show, Backbone, Marionette, $, _) {
            Show.Controller = {
                showAbout: function() {
                    var view = new Show.Message();
                    App.regions.main.show(view);
                }
            };
        });
    });