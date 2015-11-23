import Ember from 'ember';
import Adapter from 'gamernet-ember-3/adapters/adapter';
import session from 'gamernet-ember-3/models/local-session';

export default Ember.Controller.extend({
	name:"",
	description:"",
	actions: {
		submitGroup() {
			var self = this;
			var adapter = Adapter.create();
			adapter.createGroup({
				title:this.get('name'),
				description:this.get('description'),
				leader:session.user_id
			}).then(function(result) {
				self.transitionToRoute('group',result.group_id);
			});
		}
	}
});
