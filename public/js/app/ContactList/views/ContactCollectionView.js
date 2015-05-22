'use strict';
/**
 * Created by mscienski on 5/22/15.
 */
define(['App', 'marionette', 'handlebars', 'Contact/models/Contact', './ContactView'],
    function(App, Marionette, HandleBars, Contact, ContactView) {
        return Marionette.CollectionView.extend({
            tagName: 'ul',
            childView: ContactView
        });
    });