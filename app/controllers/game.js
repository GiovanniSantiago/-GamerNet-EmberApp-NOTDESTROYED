import Ember from 'ember';
import Adapter from 'gamernet-ember-3/adapters/adapter';
import General from 'gamernet-ember-3/models/generalClass';

var adapter = Adapter.create();

export default Ember.Controller.extend({
	actions:{
		addOwn() {
			console.log("START SUCCESS");
			adapter.addGamelistItem(General.user_id,"OWN",this.get('model').game_id);
			console.log("END SUCCESS");
		},
		addWant() {
			adapter.addGamelistItem(General.user_id,"WISH",this.get('model').game_id);
		},
		addLike() {
			adapter.addGamelistItem(General.user_id,"LIKE",this.get('model').game_id);
		}
	}
});
