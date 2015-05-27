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

                        contactsListView.on('childview:contact:delete', function (childView, model) {
                            model.destroy();
                        });

                        contactsListView.on('childview:contact:show', function (childView, model) {
                            App.trigger('contact:show', model.get('id'));
                        });

                        contactsListView.on('childview:contact:edit', function(childView, model) {
                            var view = new App.ContactsApp.Edit.Contact({
                                model: model,
                                asModal: true
                            });

                            view.on('form:submit', function(data) {
                                if(model.save(data)) {
                                    childView.render();
                                    App.regions.dialog.empty();
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