define(['App', 'backbone', 'marionette', 'views/ContactCollectionView', 'views/HeaderView', 'views/AltWelcomeView'],
    function (App, Backbone, Marionette, ContactCollectionView, HeaderView, AltWelcomeView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new HeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            App.mainRegion.show(new ContactCollectionView({
                collection: App.contacts
            }));
        }
    });
});