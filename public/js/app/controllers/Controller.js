define(['App', 'backbone', 'marionette', 'views/WelcomeView', 'views/HeaderView', 'views/AltWelcomeView'],
    function (App, Backbone, Marionette, WelcomeView, HeaderView, AltWelcomeView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new HeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            App.addRegions({
                welcomeRegion: '#welcome-main'
            });

            App.mainRegion.show(new WelcomeView());
            App.welcomeRegion.show(new AltWelcomeView());
        }
    });
});