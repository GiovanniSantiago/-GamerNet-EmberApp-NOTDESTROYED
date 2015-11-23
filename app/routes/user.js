import Ember from 'ember';

import Adapter from 'gamernet-ember-3/adapters/adapter';
import App from 'gamernet-ember-3/models/generalClass';
export default Ember.Route.extend({
	setupController: function(controller,model) {
		controller.set('model',model);
	},
	model: function(params) {
		let adapter = Adapter.create();
		console.log(params.game_id);
		let res = adapter.findPlain("user",params.user_id);
		return res.then(function(dat) {
			dat.full_name=dat.first_name + dat.middle_name + dat.last_name;
			return adapter.findUserGamelists(params.user_id).then(function(gamelists) {
				return adapter.findOwnedPosts(dat.post_owner_id).then(function(posts) {
					return adapter.findFriends(params.user_id).then(function(friends) {
						dat.friends = friends;
						dat.gamelists = gamelists;

						return adapter.findUserGroups(params.user_id).then(function(groups) {
							dat.groups = groups;
							console.log("DAT IS ",dat);
							console.log("Posts: ");
							console.log(posts);
							return Ember.Object.create({user_id:App.user_id,user:dat,userPosts:posts});
						});
					});
				});
			});
		});
	}
});
