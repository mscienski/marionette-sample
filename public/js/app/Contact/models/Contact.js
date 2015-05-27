'use strict';
/**
 * Created by mscienski on 5/21/15.
 */
define(['jquery', 'backbone', 'underscore'],
    function($, Backbone, _) {
        var Contact = Backbone.Model.extend({
            urlRoot: 'contacts',
            validate: function(attrs, options) {
                var errors = {};
                if (!attrs.firstName) {
                    errors.firstName = 'Must have a first name';
                }
                if (!attrs.lastName) {
                    errors.lastName = 'Must have a last name';
                } else if (attrs.lastName.length < 2) {
                    errors.lastName = 'Last name too short';
                }
                if (!_.isEmpty(errors)) {
                    return errors;
                }
            },
            defaults: {
                firstName: '',
                lastName: '',
                phoneNumber: 'No phone number!'
            }
        });

        return Contact;
    });