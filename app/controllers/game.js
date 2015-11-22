import Ember from 'ember';
import Adapter from 'gamernet-ember-3/adapters/adapter';
import General from 'gamernet-ember-3/models/generalClass';

export default Ember.Controller.extend({
	actions:{
		addOwn() {
			Adapter.addGamelistItem(General.user_id,"OWN",this.get('model').group.group_id);
		},
		addWant() {
			Adapter.addGamelistItem(General.user_id,"WANT",this.get('model').group.group_id);
		},
		addLike() {
			Adapter.addGamelistItem(General.user_id,"LIKE",this.get('model').group.group_id);
		}
	}
});
