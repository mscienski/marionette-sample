'use strict';
/**
 * Created by mscienski on 5/22/15.
 */
define(['App', 'marionette', 'handlebars', '../Contact/models/Contact', 'views/ContactView', 'text!templates/contact-collection.hbs'],
    function(App, Marionette, HandleBars, Contact, ContactView, template) {
        return Marionette.CollectionView.extend({
            tagName: 'ul',
            childView: ContactView
        });
    });