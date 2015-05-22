'use strict';
/**
 * Created by mscienski on 5/22/15.
 */

define(['ContactShow/index', 'App', 'backbone', 'marionette', 'jquery', 'underscore', '../views/ShowView'],
    function(Show, App, Backbone, Marionette, $, _, ShowView) {
        App.module('ContactsApp.Show', function(Show, App, Backbone, Marionette, $, _, ShowView){
            Show.Controller = {
                showContact: function(model) {
                    var contactView = new Show.Contact({
                        model: model
                    });

                    App.mainRegion.show(contactView);
                }
            };
        }, ShowView);
    });