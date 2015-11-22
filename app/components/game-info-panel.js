import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ["panel","panel-default"],
	actions: {
		addWant() {
			this.sendAction('onAddWant');
		},
		addOwn() {
			this.sendAction('onAddOwn');
		},
		addLike() {
			this.sendAction('onAddLike');
		}
	}
});
