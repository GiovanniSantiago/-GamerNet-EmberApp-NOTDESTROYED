import Ember from 'ember';

export default Ember.Controller.extend({
	activeTab:"GAMES",
	gameTabActive: function() {
		return activeTab === "GAMES";
	},
	friendTabActive: function() {
		return activeTab === "FRIENDS";
	},
	groupTabActive: function() {
		return activeTab === "GROUPS";
	},
	setGameTab: function() {
		activeTab = "GAMES";
	},
	setFriendTab: function() {
		activeTab = "FRIENDS";
	},
	setGroupTab: function() {
		activeTab = "GROUPS";
	}
});
