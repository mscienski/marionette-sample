'use strict';
/**
 * Created by mscienski on 5/26/15.
 */
define(['App', 'backbone', 'marionette', 'handlebars', 'jquery', 'underscore', 'spin', 'jqspin', 'text!../templates/loading.hbs'],
    function(App, Backbone, Marionette, Handlebars, $, _, spin, jqspin, template) {
        App.module('Common.Views', function(Views, App, Backbone, Marionette, $, _) {
            Views.Loading = Marionette.ItemView.extend({
                template: Handlebars.compile(template),

                title: 'Loading Data',
                message: 'Please wait, data is loading',

                serializeData: function() {
                    return {
                        title: Marionette.getOption(this, 'title'),
                        message: Marionette.getOption(this, 'message')
                    };
                },

                onShow: function() {
                    var opts = {
                        lines: 13,
                        length: 20,
                        width: 10,
                        radius: 30,
                        corners: 1,
                        rotate: 0,
                        direction: 1,
                        color: '#000',
                        speed: 1,
                        trail: 60,
                        shadow: false,
                        hwaccel: false,
                        className: 'spinner',
                        zIndex: 2e9,
                        top: '30px',
                        left: 'auto'
                    };
                    $('#spinner').spin(opts);
                }
            });
        });
    });