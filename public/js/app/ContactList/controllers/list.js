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

                    var contactsListLayout = new App.ContactsApp.Panel.Layout();
                    var contactsListPanel = new App.ContactsApp.Panel.Panel();

                    App.request('contact:entities').done(function(contacts) {
                        var contactsListView = new List.Contacts({
                            collection: contacts
                        });

                        contactsListLayout.on('show', function() {
                            contactsListLayout.panelRegion.show(contactsListPanel);
                            contactsListLayout.contactsRegion.show(contactsListView);
                        });

                        contactsListPanel.on('contact:new', function() {
                            var newContact = new App.Entities.Contact();
                            var view = new App.ContactsApp.New.Contact({
                                model: newContact
                            });

                            view.on('form:submit', function(data) {
                                if (contacts.length > 0) {
                                    var highestId = contacts.max(function(c) {
                                        return c.id;
                                    }).get('id');
                                    data.id = highestId + 1;
                                } else {
                                    data.id = 1;
                                }
                                if(newContact.save(data)) {
                                    contacts.add(newContact);
                                    view.trigger('dialog:close');
                                    contactsListView.children.findByModel(newContact)
                                        .flash('success');
                                } else {
                                    view.triggerMethod('form:data:invalid', newContact.validationError);
                                }
                            });

                            App.regions.dialog.show(view);
                        });

                        contactsListView.on('childview:contact:delete', function (childView, args) {
                            args.model.destroy();
                        });

                        contactsListView.on('childview:contact:show', function (childView, args) {
                            App.trigger('contact:show', args.model.get('id'));
                        });

                        contactsListView.on('childview:contact:edit', function(childView, args) {
                            var model = args.model
                            var view = new App.ContactsApp.Edit.Contact({
                                model: model
                            });

                            view.on('form:submit', function(data) {
                                if(model.save(data)) {
                                    childView.render();
                                    view.trigger('dialog:close');
                                    childView.flash('success');
                                } else {
                                    view.triggerMethod('form:data:invalid', model.validationError);
                                }
                            });

                            App.regions.dialog.show(view);
                        });

                        App.regions.main.show(contactsListLayout);
                    });
                }
            };
        });
    });