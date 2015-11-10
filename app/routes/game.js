import Ember from 'ember';

import Adapter from 'gamernet-ember-3/adapters/adapter';

import Adapter2 from 'gamernet-ember-3/adapters/adapter';

export default Ember.Route.extend({
	model: function(params) {
		let adapter = Adapter.create();
		console.log(params.game_id);
		/*var res = Promise.all([
			adapter.getGame(params.game_id),
			adapter.getReviewsByGame(params.game_id),
			adapter.get
		]);*/
		let res = adapter.getGame(params.game_id);
		return res;
	}
});

