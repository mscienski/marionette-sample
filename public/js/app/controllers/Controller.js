define(['App', 'backbone', 'marionette', 'views/HeaderView', 'ContactList/index'],
    function (App, Backbone, Marionette, HeaderView, ContactList) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new HeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index: App.ContactsApp.List.Controller.listContacts
    });
});