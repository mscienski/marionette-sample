'use strict';
/**
 * Created by mscienski on 5/22/15.
 */
define(['App', './ContactView', 'marionette', 'handlebars', 'jquery', 'text!../templates/composite-contact.hbs', 'text!../templates/empty.hbs'],
    function(App, Contact, Marionette, HandleBars, $, template, noContactTemplate) {
        var NoContactsView = Marionette.ItemView.extend({
            template: HandleBars.compile(noContactTemplate),
            tagName: 'tr',
            className: 'alert'
        });

        return Marionette.CompositeView.extend({
            tagName: 'table',
            className: 'table table-hover',
            template: HandleBars.compile(template),
            childView: Contact,
            childViewContainer: 'tbody',
            emptyView: NoContactsView,

            initialize: function() {
                this.listenTo(this.collection, 'reset', function() {
                    this.attachHtml = function(collectionView, childView, index) {
                        collectionView.$el.append(childView.el);
                    };
                });
            },

            onRenderCollection: function() {
                this.attachHtml = function(collectionView, childView, index) {
                    collectionView.$el.prepend(childView.el);
                };
            }
        });
    });