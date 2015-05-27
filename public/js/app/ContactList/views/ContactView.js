/**
 * Created by mscienski on 5/21/15.
 */

define(['App', 'marionette', 'handlebars', 'jquery', 'Contact/models/Contact', 'text!../templates/contact.hbs'],
    function(App, Marionette, HandleBars, $, Contact, template) {
        return Marionette.ItemView.extend({
            tagName: 'tr',
            template: HandleBars.compile(template),
            events: {
                'click': 'highlightName'
            },
            triggers: {
                'click button.js-delete': 'contact:delete',
                'click td a.js-show': 'contact:show',
                'click td a.js-edit': 'contact:edit'
            },
            highlightName: function(e) {
                e.preventDefault();
                this.$el.toggleClass('warning');
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
