define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars', 'collections/ContactCollection'],
    function ($, Backbone, Marionette, _, Handlebars, ContactCollection) {
        var App = new Backbone.Marionette.Application();

        //Organize Application into regions corresponding to DOM elements
        //Regions can contain views, Layouts, or subregions nested as necessary
        App.addRegions({
            headerRegion:"header",
            mainRegion:"#main"
        });

        function isMobile() {
            var ua = (navigator.userAgent || navigator.vendor || window.opera, window, window.document);
            return (/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }

        App.mobile = isMobile();

        App.contacts = new ContactCollection ([
            {
                firstName: 'Bob',
                lastName: 'Loblaw',
                phoneNumber: '801-555-1111'
            },
            {
                firstName: 'Alice',
                lastName: 'Wonderland',
                phoneNumber: '801-555-2222'
            },
            {
                firstName: 'Mickey',
                lastName: 'Mouse',
                phoneNumber: '801-555-3333'
            }
        ]);

        App.addInitializer(function (options) {
            Backbone.history.start();
        });

        return App;
    });