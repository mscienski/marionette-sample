'use strict';
/**
 * Created by mscienski on 5/22/15.
 */

define(['../App', 'marionette', 'backbone', 'jquery', 'underscore', './models/Contact', './collections/ContactCollection'],
    function(App, Marionette, Backbone, $, _, Contact, ContactCollection) {
        App.module('Entities', function(Entities, App, Backbone, Marionette, $, _, Contact, ContactCollection) {
            Entities.Contact = Contact;
            Entities.ContactCollection = ContactCollection;

            var API = {
                getContactEntities: function() {
                    if (contacts === undefined) {
                        initializeContacts();
                    }
                    return contacts;
                }
            };

            var contacts;

            function initializeContacts() {
                contacts = new Entities.ContactCollection([
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
            }

            App.reqres.setHandler('contact:entities', function() {
                return API.getContactEntities();
            });
        }, Contact, ContactCollection);
    });