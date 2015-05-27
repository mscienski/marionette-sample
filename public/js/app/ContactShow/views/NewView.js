'use strict';
/**
 * Created by mscienski on 5/27/15.
 */
define(['App', 'backbone', 'marionette', 'jquery', 'underscore', 'Contact/views/CommonViews'],
    function(App, Backbone, Marionette, $, _, CommonViews) {
        App.module('ContactsApp.New', function(New, App, Backbone, Marionette, $, _) {
            New.Contact = App.ContactsApp.Common.Views.Form.extend({
                title: 'New Contact'
            });
        });
    });