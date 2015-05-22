'use strict';
/**
 * Created by mscienski on 5/22/15.
 */
define(['jquery', 'backbone', 'models/Contact'],
    function($, Backbone, Contact) {
        return Backbone.Collection.extend({
            model: Contact
        });
    });