import Ember from 'ember';

export default Ember.Controller.extend({
	
	activeTab:"BYCONSOLE",
	isByConsole: Ember.computed('activeTab',function(){return this.get("activeTab")==="BYCONSOLE";}),
	isByGenre: Ember.computed('activeTab', function(){return this.get("activeTab")==="BYGENRE";}),
	isByAlphabetical:  Ember.computed('activeTab', function(){return this.get("activeTab")==="BYALPHABETICAL";}),
	
	actions:{
		setByConsoleTab(){this.set('activeTab',"BYCONSOLE"); console.log("console");},
		setByGenreTab(){this.set('activeTab','BYGENRE'); console.log("genre");},
		setByAlphabeticalTab(){this.set('activeTab','BYALPHABETICAL');console.log("alf");}
	}
});