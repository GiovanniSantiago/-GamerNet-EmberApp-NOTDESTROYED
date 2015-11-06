import Ember from 'ember';
import Adapter from 'gamernet-ember-3/adapters/adapter';

export default Ember.Route.extend({
	model: function(params) {
		let adapter = Adapter.create();
		console.log(params.game_id);
		let res = adapter.find("user",params.user_id);
		console.log(res);
		return {user:res,userPosts:adapter.accumCustom("post","owner_id",res.owner_id)};
	}
});