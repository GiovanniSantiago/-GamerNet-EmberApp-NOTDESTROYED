import Ember from 'ember';

import Adapter from 'gamernet-ember-3/adapters/adapter';


export default Ember.Route.extend({
	model: function(params) {
		let adapter = Adapter.create();
		let res = adapter.getAll("group");
		console.log(res);
		return res;
	}
});