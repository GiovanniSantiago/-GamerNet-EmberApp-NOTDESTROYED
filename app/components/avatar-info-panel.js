import Ember from 'ember';

export default Ember.Component.extend({
classNames:['panel', 'panel-default']
	actions: {
		submitFriend() {
			this.sendAction('submitFriend');
		}
	}
});
