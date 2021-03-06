'use strict';
/**
 * Created by mscienski on 5/22/15.
 */
define(['jquery', 'backbone', '../models/Contact'],
    function($, Backbone, Contact) {
        return Backbone.Collection.extend({
            url: 'contacts',
            model: Contact,
            comparator: function(Contact) {
                return Contact.firstName + " " + Contact.lastName;
            }
        });
    });