'use strict';
/**
 * Created by mscienski on 5/22/15.
 */

define(['App', 'marionette', 'backbone', 'jquery', 'underscore', './models/Contact', './collections/ContactCollection', './routers/AppRouter', 'views/HeaderView', './localstorage'],
    function(App, Marionette, Backbone, $, _, Contact, ContactCollection, ContactsAppRouter, HeaderView, LocalStorage) {

        App.module('Entities', function(Entities, App, Backbone, Marionette, $, _, Contact, ContactCollection, ContactsAppRouter, HeaderView) {
            Entities.Contact = Contact;
            Entities.ContactCollection = ContactCollection;

            var API = {
                getContactEntities: function() {
                    var contacts = new Entities.ContactCollection();
                    contacts.fetch();
                    if (contacts.length === 0) {
                        return initializeContacts();
                    }
                    return contacts;
                },
                getContactEntity: function(contactId) {
                    var contact = new Entities.Contact({id: contactId});
                    contact.fetch();
                    return contact;
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

                return contacts
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