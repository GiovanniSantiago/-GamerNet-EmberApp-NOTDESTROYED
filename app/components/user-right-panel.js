import Ember from 'ember';  

export default Ember.Component.extend({
  classNames: ['panel', 'panel-default'],
	activeTab:"GAMES",
	isGamesTab: Ember.computed('activeTab',function(){return this.get("activeTab")==="GAMES";}),
	isFriendsTab: Ember.computed('activeTab', function(){return this.get("activeTab")==="FRIENDS";}),
	isGroupsTab:  Ember.computed('activeTab', function(){return this.get("activeTab")==="GROUPS";}),
	
	actions:{
		setGamesTab(){this.set('activeTab',"GAMES");},
		setFriendsTab(){this.set('activeTab','FRIENDS');},
		setGroupsTab(){this.set('activeTab','GROUPS');}
	}
});