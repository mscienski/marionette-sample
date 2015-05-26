'use strict';
/**
 * Created by mscienski on 5/26/15.
 */
define(['App', 'Contact/index', 'backbone', 'marionette', 'jquery', 'underscore'],
    function(App, ContactEntities, Backbone, Marionette, $, _) {
        App.module("Entities", function(Entities, App, Backbone, Marionette, $, _){
            var findStorageKey = function(entity){
                // use a model's urlRoot value
                if(entity.urlRoot){
                    return _.result(entity, "urlRoot");
                }
                // use a collection's url value
                if(entity.url){
                    return _.result(entity, "url");
                }
                // fallback to obtaining a model's storage key from
                // the collection it belongs to
                if(entity.collection && entity.collection.url){
                    return _.result(entity.collection, "url");
                }

                throw new Error("Unable to determine storage key");
            };

            var StorageMixin = function(entityPrototype){
                var storageKey = findStorageKey(entityPrototype);
                return { localStorage: new Backbone.LocalStorage(storageKey) };
            };

            var getEntity = function(constructorString){
                var bits = constructorString.split("."),
                    entity = App;
                _.each(bits, function(bit){
                    entity = entity[bit];
                });
                return entity;
            };

            Entities.configureStorage = function(constructorString){
                var OldConstructor = getEntity(constructorString);
                var NewConstructor = function(){
                    var obj = new OldConstructor(arguments[0], arguments[1]);
                    _.extend(obj, new StorageMixin(OldConstructor.prototype));
                    return obj;
                }
                NewConstructor.prototype = OldConstructor.prototype;

                eval(constructorString + " = NewConstructor;");
            };
        });
    });