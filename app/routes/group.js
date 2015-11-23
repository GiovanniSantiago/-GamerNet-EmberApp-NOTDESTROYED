import Ember from 'ember';
import Adapter from 'gamernet-ember-3/adapters/adapter';


export default Ember.Route.extend({
	setupController: function(controller,model) {
		controller.set('model',model);
	},
	model: function(params) {
		let adapter = Adapter.create();
		let res = adapter.findPlain('group',params.group_id);
		return res.then(function(groupData) {
			return adapter.findOwnedPosts(groupData.post_owner_id).then(function(posts) {
				return adapter.findAll("/group/getUsersOf/"+params.group_id).then(function(membersOf){
					return Ember.Object.create({group:groupData,groupPosts:posts,groupMembers:membersOf});
				},function(data){
					console.log(data);
				});
				
			});
		});

	}
});
