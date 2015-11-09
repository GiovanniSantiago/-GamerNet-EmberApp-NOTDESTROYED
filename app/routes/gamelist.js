import Ember from 'ember';

import Adapter from 'gamernet-ember-3/adapters/adapter';


export default Ember.Route.extend({
	model: function() {
		let adapter = Adapter.create();
		console.log("entered gamelist");
		//let res = adapter.getAll("game");
		let res = adapter.getGames("name",20,0);
		return res;
		
	}
});
