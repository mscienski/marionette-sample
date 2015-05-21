define( [ 'App', 'marionette', 'handlebars', 'models/Model', 'text!templates/alt-welcome.hbs'],
    function( App, Marionette, Handlebars, Model, template) {
        //ItemView provides some default rendering logic
        return Marionette.ItemView.extend( {
            //Template HTML string
            template: Handlebars.compile(template),
            model: new Model({
                mobile: App.mobile
            }),
            id: 'static-view',
            tagName: 'span',
            className: 'well',

            // View Event Handlers
            events: {

            }
        });
    });