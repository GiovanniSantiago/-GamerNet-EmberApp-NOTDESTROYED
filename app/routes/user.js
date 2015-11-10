import Ember from 'ember';

import Adapter from 'gamernet-ember-3/adapters/adapter';

export default Ember.Route.extend({
	model: function(params) {
        console.log("app user_id"+App.user_id);
		let adapter = Adapter.create();
		console.log(params.game_id);
		let res = adapter.findPlain("user",params.user_id);
		return res.then(function(dat) {
			console.log(dat);
			dat.full_name=dat.first_name + dat.middle_name + dat.last_name;
			dat.gamelists = adapter.findUserGamelists(params.user_id);
			return adapter.findOwnedPosts(dat.post_owner_id).then(function(posts) {
				return {user:dat,userPosts:posts};
			});
		});
		
	}
});