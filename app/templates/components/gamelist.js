import Ember from 'ember';

export Ember.Component.extends({
	
	activeTab:"BYCONSOLE",
	isByConsole: Ember.computed('activeTab',function(){return this.get("activeTab")==="BYCONSOLE"}),
	isByGenre: Ember.computed('activeTab', function(){return this.get('activeTab')==="BYGENRE"}),
	isByAlphabetical:  Ember.computed('activeTab', function(){return this.get('activeTab')==="ALPHABETIC"}),
	
	actions:{
		setByConsoleTab(){this.set('activeTab',"GAMES");},
		setByGenreTab(){this.set('activeTab','FRIEND');},
		setByAlphabeticalTab(){this.set('activeTab','GROUP')}
	}
});