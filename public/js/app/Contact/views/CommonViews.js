'use strict';
/**
 * Created by mscienski on 5/27/15.
 */
define(['App','backbone','marionette','handlebars','jquery','underscore','text!../templates/form.hbs','../index', 'backbone.syphon'],
    function(App, Backbone, Marionette, Handlebars, $, _, template, ContactsApp, BackboneSyphon) {
        App.module('ContactsApp.Common.Views', function(Views, App, Backbone, Marionette, $, _) {
            Views.Form = Marionette.ItemView.extend({
                template: Handlebars.compile(template),

                events: {
                    'click button.js-submit': 'submitClicked'
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
                        var $controlGroup = $view.find('#contact-'+key).parent();
                        var $errorEl = $('<span>', {class: 'help-inline error', text: value});

                        $controlGroup.append($errorEl).addClass('error');
                    }

                    clearFormErrors();
                    _.each(errors, markErrors);
                }
            });
        });
    });