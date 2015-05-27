'use strict';
/**
 * Created by mscienski on 5/27/15.
 */
define(['App', 'backbone', 'marionette', 'handlebars', 'jquery', 'underscore', '../index', 'text!../templates/panel.hbs'],
    function(App, Backbone, Marionette, Handlebars, $, _, PanelModule, template) {
        App.module('ContactsApp.Panel', function(Panel, App, Backbone, Marionette, $, _) {
            Panel.Layout = Marionette.LayoutView.extend({
                template: Handlebars.compile(template),

                regions: {
                    panelRegion: '#panel-region',
                    contactsRegion: '#contacts-region'
                }
            });
        });
    });