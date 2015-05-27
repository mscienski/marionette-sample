'use strict';
/**
 * Created by mscienski on 5/27/15.
 */
define(['App', 'backbone', 'marionette', 'handlebars', 'jquery', 'underscore', '../index', 'text!../templates/add.hbs'],
    function(App, Backbone, Marionette, Handlebars, $, _, PanelModule, template) {
        App.module('ContactsApp.Panel', function(Panel, App, Backbone, Marionette, $, _) {
            Panel.Panel = Marionette.LayoutView.extend({
                template: Handlebars.compile(template),

                triggers: {
                    'click button.js-new': 'contact:new'
                }
            });
        });
    });