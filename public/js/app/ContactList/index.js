'use strict';
/**
 * Created by mscienski on 5/22/15.
 */
define(['App', 'marionette', 'backbone', 'jquery', 'underscore', './views/ContactView', './views/ContactsView', './controllers/list'],
    function(App, Marionette, Backbone, $, _, ContactView, ContactsView, ListController) {
        App.module('ContactsApp.List', function(List, App, Backbone, Marionette, $, _, ContactView, ContactsView, ListController){
            List.Contact = ContactView;
            List.Contacts = ContactsView;
        }, ContactView, ContactsView, ListController);
    });