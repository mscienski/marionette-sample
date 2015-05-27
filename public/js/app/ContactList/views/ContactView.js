/**
 * Created by mscienski on 5/21/15.
 */

define(['App', 'marionette', 'handlebars', 'jquery', 'Contact/models/Contact', 'text!../templates/contact.hbs'],
    function(App, Marionette, HandleBars, $, Contact, template) {
        return Marionette.ItemView.extend({
            tagName: 'tr',
            template: HandleBars.compile(template),
            events: {
                'click': 'highlightName',
                'click button.js-delete': 'deleteClicked',
                'click td a.js-show': 'showClicked',
                'click td a.js-edit': 'editClicked'
            },
            highlightName: function(e) {
                e.preventDefault();
                this.$el.toggleClass('warning');
            },
            deleteClicked: function(e) {
                e.stopPropagation();
                this.trigger('contact:delete', this.model);
            },
            showClicked: function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.trigger('contact:show', this.model);
            },
            editClicked: function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.trigger('contact:edit', this.model);
            },
            remove: function() {
                var self = this;
                this.$el.fadeOut(1000, function() {
                    Marionette.ItemView.prototype.remove.call(self);
                });
            },
            flash: function(cssClass) {
                var $view = this.$el;
                $view.hide().toggleClass(cssClass).fadeIn(800, function() {
                    setTimeout(function() {
                        $view.toggleClass(cssClass);
                    }, 500);
                });
            }
        });
    });
