'use strict';
/**
 * Created by mscienski on 5/27/15.
 */
define(['App', 'backbone', 'marionette', 'handlebars', 'jquery', 'underscore', 'text!../templates/edit.hbs', 'backbone.syphon'],
    function(App, Backbone, Marionette, Handlebars, $, _, template, BackboneSyphon) {
        App.module('ContactsApp.Edit', function(Edit, App, Backbone, Marionette, $, _) {
            Edit.Contact = Marionette.ItemView.extend({
                template: Handlebars.compile(template),

                initialize: function() {
                    this.title = 'Edit ' + this.model.get('firstName') + ' ' + this.model.get('lastName');
                },

                events: {
                    'click button.js-submit': 'submitClicked'
                },

                onRender: function() {
                    if(!this.options.asModal) {
                        var $title = $('<h1>', {text: this.title});
                        this.$el.prepend($title);
                    }
                },

                onShow: function() {
                    if(this.options.asModal) {
                        this.$el.dialog({
                            modal: true,
                            title: this.title,
                            width: 'auto'
                        });
                    }
                },

                submitClicked: function(e) {
                    e.preventDefault();
                    var data = Backbone.Syphon.serialize(this);
                    this.trigger('form:submit', data);
                },

                onFormDataInvalid: function(errors) {
                    var $view = this.$el;

                    function clearFormErrors() {
                        var $form = $view.find('form');
                        $form.find('.help-inline.error').remove();
                        $form.find('.control-group.error').removeClass('error');
                    }

                    function markErrors(value, key) {
                        var $controlGroup = $view.find('#contact-' + key).parent();
                        var $errorEl = $('<span>', {class: 'help-inline error', text:value});
                        $controlGroup.append($errorEl).addClass('error');
                    }

                    clearFormErrors();

                    _.each(errors, markErrors);
                }
            });
        });
    });
