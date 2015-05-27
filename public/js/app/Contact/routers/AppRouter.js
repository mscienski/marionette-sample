'use strict';
/**
 * Created by mscienski on 5/26/15.
 */

define(['Contact/index', 'App', 'backbone', 'marionette', 'jquery', 'underscore', 'ContactList/index', 'ContactShow/index'],
    function(ContactsApp, App, Backbone, Marionette, $, _, List, Show) {
        App.module('ContactsApp', function(ContactsApp, App, Backbone, Marionette, $, _) {
            ContactsApp.Router = Marionette.AppRouter.extend({
                appRoutes: {
                    'contacts': 'listContacts',
                    'contacts/:id': 'showContact',
                    'contacts/:id/edit': 'editContact'
                }
            });

            var API = {
                listContacts: ContactsApp.List.Controller.listContacts,
                showContact: function(id) {
                    ContactsApp.Show.Controller.showContact(id);
                },
                editContact: function(id) {
                    ContactsApp.Edit.Controller.editContact(id);
                }
            };

            App.on('contacts:list', function() {
                App.navigate('contacts');
                API.listContacts();
            });

            App.on('contact:show', function(id) {
                App.navigate('contacts/' + id);
                API.showContact(id);
            });

            App.on('contact:edit', function(id) {
                App.navigate('contacts/' + id + '/edit');
                API.editContact(id);
            });

            App.on('before:start', function() {
                new ContactsApp.Router({
                    controller: API
                });
            });
        });
    });
