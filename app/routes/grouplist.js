import Ember from 'ember';

import Adapter from 'gamernet-ember-3/adapters/adapter';


export default Ember.Route.extend({
    groups:undefined,
	model: function(params) {
            let adapter = Adapter.create();
            let response = adapter.findAll("group").then(function(result){
                    return result;                        
                });
            return response;                            
            }
});