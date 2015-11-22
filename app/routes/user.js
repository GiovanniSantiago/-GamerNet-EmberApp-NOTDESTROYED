import Ember from 'ember';

import Adapter from 'gamernet-ember-3/adapters/adapter';
import App from 'gamernet-ember-3/models/generalClass'
export default Ember.Route.extend({
	setupController: function(controller,model) {
		controller.set('model',model);
	},
	model: function(params) {
		let adapter = Adapter.create();
		console.log(params.game_id);
		let res = adapter.findPlain("user",params.user_id);
		return res.then(function(dat) {
			console.log(dat);
			dat.full_name=dat.first_name + dat.middle_name + dat.last_name;
			dat.gamelists = adapter.findUserGamelists(params.user_id);
			return adapter.findOwnedPosts(dat.post_owner_id).then(function(posts) {
				return adapter.findFriends(params.user_id).then(function(friends) {
					dat.friends = friends;
					console.log("DAT IS "+dat);
					return Ember.Object.create({user_id:App.user_id,user:dat,userPosts:posts});
				});
			});
		});
	}
});
