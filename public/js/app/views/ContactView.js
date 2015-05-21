/**
 * Created by mscienski on 5/21/15.
 */

define(['App', 'marionette', 'handlebars', 'models/Contact', 'text!templates/contact.hbs'],
    function(App, Marionette, HandleBars, Contact, template) {
        return Marionette.ItemView.extend({
            template: HandleBars.compile(template),
            model: new Contact({
                firstName: 'John',
                lastName: 'Smith',
                phoneNumber: '801-555-8573'
            })
        });
    });
