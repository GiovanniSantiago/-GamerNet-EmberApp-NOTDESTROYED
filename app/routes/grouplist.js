import Ember from 'ember';

import Adapter from 'gamernet-ember-3/adapters/adapter';


export default Ember.Route.extend({
    groups:undefined,
	model: function(params) {
		let adapter = Adapter.create();
		let res = adapter.findAll("group").then(function(result){
            console.log(JSON.stringify(result));
    this.set('groups',result);
    }.bind(this));
        }
});