'use strict';
/**
 * Created by mscienski on 5/27/15.
 */
define(['App', 'backbone', 'marionette', 'jquery', 'underscore', 'Contact/views/CommonViews'],
    function(App, Backbone, Marionette, $, _, CommonViews) {
        App.module('ContactsApp.Edit', function(Edit, App, Backbone, Marionette, $, _) {
            Edit.Contact = App.ContactsApp.Common.Views.Form.extend({
                initialize: function() {
                    this.title = 'Edit ' + this.model.get('firstName') + ' ' + this.model.get('lastName');
                },

                onRender: function() {
                    if(this.options.generateTitle) {
                        var $title = $('<h1>', {text: this.title});
                        this.$el.prepend($title);
                    }
                }
            });
        });
    });
