/**
 * Created by mscienski on 5/21/15.
 */

define(['App', 'marionette', 'handlebars', 'Contact/models/Contact', 'text!../templates/contact.hbs'],
    function(App, Marionette, HandleBars, Contact, template) {
        return Marionette.ItemView.extend({
            tagName: 'li',
            template: HandleBars.compile(template)
        });
    });
