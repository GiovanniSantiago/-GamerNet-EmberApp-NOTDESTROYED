import Ember from 'ember';

import Adapter from 'gamernet-ember-3/adapters/adapter';

import Adapter2 from 'gamernet-ember-3/adapters/adapter';

export default Ember.Route.extend({
	setupController: function(controller,model) {
		controller.set('model',model);
	},
	model: function(params) {
		let adapter = Adapter.create();
		console.log(params.game_id);
		let res = Promise.all([
			adapter.getGame(params.game_id),
			adapter.getReviewsByGame(params.game_id),
			adapter.getMatchmakingsByGame(params.game_id),
			adapter.getRelatedGroupsByGame(params.game_id)
		]);
		return res.then(function(data) {
			return {
				desc:data[0].desc,
				image:data[0].image,
				name:data[0].name,
				platforms:data[0].platforms,
				matchmakings:data[2],
				groups:data[3],
				reviews:data[1],
				game_id:params.game_id
			};
		});
	}
});
