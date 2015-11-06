import Ember from 'ember';
import Adapter from 'gamer-net-ember/adapters/adapter';

export default Ember.Route.extend({
	model: function() {
		let adapter = Adapter.create();
		console.log("entered gamelist");
		let res = adapter.getAll("game");
		return res;
	}
});
