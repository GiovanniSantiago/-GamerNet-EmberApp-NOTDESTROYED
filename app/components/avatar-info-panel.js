import Ember from 'ember';

export default Ember.Component.extend({
classNames:['panel', 'panel-default'],
	actions: {
		submitFriend() {
			console.log("infopane.submitFriend called");
			this.sendAction('submitFriend');
		}
	}
});
