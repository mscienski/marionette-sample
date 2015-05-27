'use strict';
/**
 * Created by mscienski on 5/22/15.
 */

define(['ContactShow/index', 'App', 'backbone', 'marionette', 'jquery', 'underscore', 'ContactShow/views/ShowView'],
    function(Show, App, Backbone, Marionette, $, _, ShowView) {
        App.module('ContactsApp.Show', function(Show, App, Backbone, Marionette, $, _, ShowView){
            Show.Controller = {
                showContact: function(id) {
                    var loadingView = new App.Common.Views.Loading({
                        title: 'Artificial Loading Delay',
                        message: 'Data loading is delayed to demonstrate using a loading view'
                    });
                    App.regions.main.show(loadingView);

                    App.request('contact:entity', id)
                        .done(function(contact) {
                            var contactView;
                            if (contact !== undefined) {
                                contactView = new Show.Contact({
                                    model: contact
                                });

                                contactView.on('contact:edit', function(editContact) {
                                    App.trigger('contact:edit', editContact.get('id'));
                                });
                            } else {
                                contactView = new Show.MissingContact();
                            }

                            App.regions.main.show(contactView);
                        });
                }
            };
        }, ShowView);
    });