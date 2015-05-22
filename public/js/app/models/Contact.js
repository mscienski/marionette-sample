'use strict';
/**
 * Created by mscienski on 5/21/15.
 */
define(['jquery', 'backbone'],
    function($, Backbone) {
        var Contact = Backbone.Model.extend({
            defaults: {
                firstName: '',
                lastName: '',
                phoneNumber: 'No phone number!'
            }
        });

        return Contact;
    });