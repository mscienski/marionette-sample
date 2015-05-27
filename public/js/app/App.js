define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars'],
    function ($, Backbone, Marionette, _, Handlebars) {
        var App = new Backbone.Marionette.Application();


        var RegionContainer = Marionette.LayoutView.extend({
            el: '#app-container',

            regions: {
                header: 'header',
                main: '#main',
                dialog: '#dialog-region'
            }
        });
        //Organize Application into regions corresponding to DOM elements
        //Regions can contain views, Layouts, or subregions nested as necessary
        App.regions = new RegionContainer();

        function isMobile() {
            var ua = (navigator.userAgent || navigator.vendor || window.opera, window, window.document);
            return (/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }

        App.mobile = isMobile();

        App.navigate = function(route, options) {
            options  = options || {};
            Backbone.history.navigate(route, options);
        };

        App.getCurrentRoute = function() {
            return Backbone.history.fragment;
        };

        App.on('start', function (options) {
            Backbone.history.start();

            if (this.getCurrentRoute() === '') {
                App.trigger('contacts:list');
            }
        });

        return App;
    });