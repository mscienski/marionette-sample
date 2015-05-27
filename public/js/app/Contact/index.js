'use strict';
/**
 * Created by mscienski on 5/22/15.
 */

define(['App', 'marionette', 'backbone', 'jquery', 'underscore', 'Q', './models/Contact', './collections/ContactCollection', './routers/AppRouter', 'views/HeaderView', './localstorage', './views/CommonViews'],
    function(App, Marionette, Backbone, $, _, Q, Contact, ContactCollection, ContactsAppRouter, HeaderView, LocalStorage, CommonViews) {

        App.module('Entities', function(Entities, App, Backbone, Marionette, $, _, Contact, ContactCollection, ContactsAppRouter, HeaderView, CommonViews) {
            Entities.Contact = Contact;
            Entities.ContactCollection = ContactCollection;

            Entities.FilteredCollection = function(options) {
                var original = options.collection;
                var filtered = new original.constructor();
                filtered.add(original.models);
                filtered.filterFunction = options.filterFunction;

                function applyFilter(filterCriterion, filterStrategy, collection) {
                    var collection = collection || original; //jshint ignore:line
                    var criterion;
                    if(filterStrategy === 'filter') {
                        criterion = filterCriterion.trim();
                    } else {
                        criterion = filterCriterion;
                    }

                    var items = [];
                    if(criterion) {
                        if(filterStrategy === 'filter') {
                            if(!filtered.filterFunction) {
                                throw('Attempted to use \'filter\' function, but none was defined');
                            }
                            var filterFunction = filtered.filterFunction(criterion);
                            items = collection.filter(filterFunction);
                        } else {
                            items = collection.where(criterion);
                        }
                    } else {
                        items = collection.models;
                    }

                    filtered._currentCriterion = criterion;

                    return items;
                }

                filtered.filter = function(filterCriterion) {
                    filtered._currentFilter = 'filter';
                    var items = applyFilter(filterCriterion, 'filter');

                    filtered.reset(items);
                    return filtered;
                };

                filtered.where = function(filterCriterion) {
                    filtered._currentFilter = 'where';
                    var items = applyFilter(filterCriterion, 'where');

                    filtered.reset(items);
                    return filtered;
                };

                original.on('reset', function() {
                    var items = applyFilter(filtered._currentCriterion, filtered._currentFilter);
                    filtered.reset(items);
                });

                original.on('add', function(models) {
                    var coll = new original.constructor();
                    coll.add(models);
                    var items = applyFilter(filtered._currentCriterion, filtered._currentFilter, coll);
                    filtered.add(items);
                });

                return filtered;
            };

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

        }, Contact, ContactCollection, ContactsAppRouter, HeaderView, CommonViews);
    });