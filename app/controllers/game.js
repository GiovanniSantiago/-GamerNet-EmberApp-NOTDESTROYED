import Ember from 'ember';
import Adapter from 'gamernet-ember-3/adapters/adapter';
import General from 'gamernet-ember-3/models/generalClass';

var adapter = Adapter.create();

export default Ember.Controller.extend({
	actions:{
		addOwn() {

			adapter.addGamelistItem(General.user_id,"OWN",this.get('model').game_id);
		},
		addWant() {
			adapter.addGamelistItem(General.user_id,"WANT",this.get('model').game_id);
		},
		addLike() {
			adapter.addGamelistItem(General.user_id,"LIKE",this.get('model').game_id);
		}
	}
});
