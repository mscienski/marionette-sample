'use strict';
/**
 * Created by mscienski on 5/22/15.
 */
define(['App', 'marionette', 'backbone', 'jquery', 'underscore', './views/ContactView', './views/ContactCollectionView'],
    function(App, Marionette, Backbone, $, _, ContactView, ContactCollectionView) {
        App.module('ContactsApp.List', function(List, App, Backbone, Marionette, $, _, ContactView, ContactCollectionView){
            List.Contact = ContactView;
            List.Contacts = ContactCollectionView;
        }, ContactView, ContactCollectionView);
    });