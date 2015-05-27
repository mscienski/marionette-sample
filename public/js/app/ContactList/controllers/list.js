'use strict';
/**
 * Created by mscienski on 5/22/15.
 */
define(['ContactList/index', 'App', 'backbone', 'marionette', 'jquery', 'underscore'],
    function(List, App, Backbone, Marionette, $, _) {
        App.module('ContactsApp.List', function(List, App, Backbone, Marionette, $, _) {
            List.Controller = {
                listContacts: function() {
                    var loadingView = new App.Common.Views.Loading();
                    App.regions.main.show(loadingView);

                    App.request('contact:entities').done(function(contacts) {
                        var contactsListView = new List.Contacts({
                            collection: contacts
                        });

                        contactsListView.on('childview:contact:delete', function (childView, model) {
                            model.destroy();
                        });

                        contactsListView.on('childview:contact:show', function (childView, model) {
                            App.trigger('contact:show', model.get('id'));
                        });

                        App.regions.main.show(contactsListView);
                    });
                }
            };
        });
    });