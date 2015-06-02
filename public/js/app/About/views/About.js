'use strict';
/**
 * Created by mscienski on 5/29/15.
 */
define(['App', 'backbone', 'marionette', 'handlebars', 'jquery', 'underscore', 'text!../templates/about.hbs'],
    function(App, Backbone, Marionette, Handlebars, $, _, template) {
        App.module('AboutApp.Show', function(Show, App, Backbone, Marionette, $, _) {
            Show.Message = Marionette.ItemView.extend({
                template: Handlebars.compile(template)
            });
        });
    });
