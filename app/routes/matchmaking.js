import Ember from 'ember';
import ajax from 'ic-ajax';
import Adapter from 'gamernet-ember-3/adapters/adapter';

export default Ember.Route.extend({
	model: function(params){
		let adapter = Adapter.create();
		
		var a= adapter.findAll("eventpost");
		console.log(JSON.stringify(a));
		return a;
		 
		
	}
});