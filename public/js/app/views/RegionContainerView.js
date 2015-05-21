/**
 * Created by mscienski on 5/21/15.
 */
define(['App', 'marionette', 'handlebars', 'models/Model', 'text!templates/region.hbs'],
function(App, Marionette, Handlebars, Model, template) {
    return Marionette.LayoutView.extend({
        el: '#main',

        regions: {
            welcome: '#welcome-main'
        }
    });
});