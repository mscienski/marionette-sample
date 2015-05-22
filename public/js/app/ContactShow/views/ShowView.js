'use strict';
/**
 * Created by mscienski on 5/22/15.
 */
define(['App', 'backbone', 'marionette', 'handlebars', 'jquery', 'underscore', 'text!../templates/contact-view.hbs'],
    function(App, Backbone, Marionette, Handlebars, $, _, template) {
        App.module('ContactsApp.Show', function(Show, App, Backbone, Marionette, $, _) {
            Show.Contact = Marionette.ItemView.extend({
                template: Handlebars.compile(template)
            });
        });
    });