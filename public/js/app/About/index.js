'use strict';

define(['App', 'backbone', 'marionette', 'jquery', 'underscore', './views/About', './controllers/About'],
    function(App, Backbone, Marionette, $, _, AboutView, AboutController) {
        App.module('AboutApp', function(AboutApp, App, Backbone, Marionette, $, _, AboutView, AboutController) {
            AboutApp.Router = Marionette.AppRouter.extend({
                appRoutes: {
                    'about': 'showAbout'
                }
            });

            var API = {
                showAbout: function() {
                    AboutApp.Show.Controller.showAbout();
                }
            };

            App.on('about:show', function() {
                App.navigate('about');
                API.showAbout();
            });

            AboutApp.on('before:start', function() {
                new AboutApp.Router({
                    controller: API
                });
            });
        }, AboutView, AboutController);
    });