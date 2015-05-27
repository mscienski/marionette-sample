'use strict';
/**
 * Created by mscienski on 5/22/15.
 */

define(['App', 'marionette', 'backbone', 'jquery', 'underscore', 'Q', './models/Contact', './collections/ContactCollection', './routers/AppRouter', 'views/HeaderView', './localstorage'],
    function(App, Marionette, Backbone, $, _, Q, Contact, ContactCollection, ContactsAppRouter, HeaderView, LocalStorage) {

        App.module('Entities', function(Entities, App, Backbone, Marionette, $, _, Contact, ContactCollection, ContactsAppRouter, HeaderView) {
            Entities.Contact = Contact;
            Entities.ContactCollection = ContactCollection;

            var API = {
                getContactEntities: function() {
                    var contacts = new Entities.ContactCollection();
                    var d = Q.defer();
                    contacts.fetch({
                        success: function(data) {
                            d.resolve(data);
                        },
                        error: function(error) {
                            d.reject(error);
                        }
                    });

                    return d.promise.then(function(fetchedContacts) {
                        if (fetchedContacts.length === 0) {
                            var models = initializeContacts();
                            contacts.reset(models);
                        }

                        return contacts;
                    });
                },

                getContactEntity: function(contactId) {
                    var d = Q.defer();
                    var contact = new Entities.Contact({id: contactId});
                    return Q.delay(2000).then(function() {
                        contact.fetch();
                        return contact;
                    });
                }
            };

            function initializeContacts() {
                var contacts = new Entities.ContactCollection([
                    {
                        id: 1,
                        firstName: 'Bob',
                        lastName: 'Loblaw',
                        phoneNumber: '801-555-1111'
                    },
                    {
                        id: 2,
                        firstName: 'Alice',
                        lastName: 'Wonderland',
                        phoneNumber: '801-555-2222'
                    },
                    {
                        id: 3,
                        firstName: 'Mickey',
                        lastName: 'Mouse',
                        phoneNumber: '801-555-3333'
                    }
                ]);

                contacts.forEach(function(contact) {
                    contact.save();
                });

                return contacts.models;
            }

            App.reqres.setHandler('contact:entities', function() {
                return API.getContactEntities();
            });

            App.reqres.setHandler('contact:entity', function(id) {
                return API.getContactEntity(id);
            });

            Entities.configureStorage('Entities.Contact');
            Entities.configureStorage('Entities.ContactCollection');

            App.regions.header.show(new HeaderView());

        }, Contact, ContactCollection, ContactsAppRouter, HeaderView);
    });