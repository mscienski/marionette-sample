'use strict';
/**
 * Created by mscienski on 5/22/15.
 */
define(['App', 'marionette', 'backbone', 'jquery', 'underscore', './controllers/show', './controllers/edit', './views/NewView', 'Contact/index'],
    function(App, Marionette, Backbone, $, _, ShowController, EditController, ContactsApp) {
        App.module('ContactsApp.Show', function(Show, App, Backbone, Marionette, $, _, ShowController, EditController, NewView) {

        }, ShowController, EditController);
    });