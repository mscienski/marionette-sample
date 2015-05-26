'use strict';
/**
 * Created by mscienski on 5/22/15.
 */

define(['ContactShow/index', 'App', 'backbone', 'marionette', 'jquery', 'underscore', 'ContactShow/views/ShowView'],
    function(Show, App, Backbone, Marionette, $, _, ShowView) {
        App.module('ContactsApp.Show', function(Show, App, Backbone, Marionette, $, _, ShowView){
            Show.Controller = {
                showContact: function(id) {
                    var contacts = App.request('contact:entities');
                    var model = contacts.get(id);
                    var contactView = new Show.Contact({
                        model: model
                    });

                    App.regions.main.show(contactView);
                }
            };
        }, ShowView);
    });