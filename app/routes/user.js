import Ember from 'ember';

import Adapter from 'gamernet-ember-3/adapters/adapter';


export default Ember.Route.extend({
	model: function(params) {
		let adapter = Adapter.create();
		console.log(params.game_id);
		let res = adapter.findPlain("user",params.user_id);
		return res.then(function(dat) {
			console.log(dat);
			return {user:dat,userPosts:adapter.findOwnedPosts(dat.owner_id)};
		});
		
	}
});