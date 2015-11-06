import Ember from 'ember';
import Adapter from 'gamernet-ember-3/adapters/adapter';

export default Ember.Route.extend({
	model: function(params) {
		let adapter = Adapter.create();
		console.log(params.group_id);
		let res = adapter.find("group",params.group_id);
		console.log(res);
		return {group:res,groupPosts:adapter.accumCustom("post","owner_id",res.owner_id)};

	}
});

