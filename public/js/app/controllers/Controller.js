define(['App', 'backbone', 'marionette', 'views/ContactView', 'views/HeaderView', 'views/AltWelcomeView'],
    function (App, Backbone, Marionette, ContactView, HeaderView, AltWelcomeView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new HeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            App.addRegions({
                welcomeRegion: '#welcome-main'
            });

            App.mainRegion.show(new ContactView());
            App.welcomeRegion.show(new AltWelcomeView());
        }
    });
});