import Ember from 'ember';

import Adapter from 'gamernet-ember-3/adapters/adapter';


export default Ember.Route.extend({
//    hola:function(){
//        console.log('gamelist inside');
//    },
	model: function() {
		let adapter = Adapter.create();
		console.log("entered gamelist");
		//let res = adapter.getAll("game");
		let res = adapter.getGames(20,0);
		return res;
		
	}
});
