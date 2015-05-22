define(['App', 'backbone', 'marionette', 'views/ContactCollectionView', 'views/HeaderView', 'Contact/index'],
    function (App, Backbone, Marionette, ContactCollectionView, HeaderView, ContactModule) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new HeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            App.contacts = App.request('contact:entities');
            App.mainRegion.show(new ContactCollectionView({
                collection: App.contacts
            }));
        }
    });
});