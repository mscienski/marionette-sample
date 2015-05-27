'use strict';
/**
 * Created by mscienski on 5/27/15.
 */
define(['App', 'backbone', 'marionette', 'jquery', 'underscore', '../views/EditView'],
    function(App, Backbone, Marionette, $, _, EditView) {
        App.module('ContactsApp.Edit', function(Edit, App, Backbone, Marionette, $, _) {
            Edit.Controller = {
                editContact: function(id) {
                    var loadingView = new App.Common.Views.Loading({
                        title: 'Artificial Loading Delay',
                        message: 'Data loading is delayed to demonstrate using a loading view.'
                    });
                    App.regions.main.show(loadingView);

                    App.request('contact:entity', id).then(function(contact) {
                        var view;
                        if (contact !== undefined) {
                            view = new Edit.Contact({
                                model: contact
                            });

                            view.on('form:submit', function(data) {
                                contact.save(data);
                                App.trigger('contact:show', contact.get('id'));

                            });
                        } else {
                            view = new App.ContactsApp.Show.MissingContact();
                        }

                        App.regions.main.show(view);
                    });
                }
            };
        });
    });