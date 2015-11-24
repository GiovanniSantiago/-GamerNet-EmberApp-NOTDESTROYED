import Ember from 'ember';
import ajax from 'ic-ajax';
import Adapter from 'gamernet-ember-3/adapters/adapter';

export default Ember.Route.extend({
	model: function(params){
		let adapter = Adapter.create();
		
		return adapter.findAll("event_post");
	}
});