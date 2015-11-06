import Ember from 'ember';

import Adapter from 'gamernet-ember-3/adapters/adapter';


export default Ember.Route.extend({
	model: function(params) {
		let adapter = Adapter.create();
		console.log(params.game_id);
		let res = adapter.find("game",params.game_id);
		console.log(res);
		return res;
	}
});

