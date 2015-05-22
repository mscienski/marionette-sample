'use strict';
/**
 * Created by mscienski on 5/22/15.
 */
define(['App', './ContactView', 'marionette', 'handlebars', 'jquery', 'text!../templates/composite-contact.hbs'],
    function(App, Contact, Marionette, HandleBars, $, template) {
        return Marionette.CompositeView.extend({
            tagName: 'table',
            className: 'table table-hover',
            template: HandleBars.compile(template),
            childView: Contact,
            childViewContainer: 'tbody',
            onChildviewContactDelete: function() {
                this.$el.fadeOut(1000, function() {
                    $(this).fadeIn(1000);
                });
            }
        });
    });