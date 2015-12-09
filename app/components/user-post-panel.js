import Ember from 'ember';

export default Ember.Component.extend({
	classNames:["panel","panel-default"],
	actions: {
		onComment(body,post_id) {
			this.sendAction('onSubmitComment',self.get('body'), self.get('post_id'));
		}
	}
});
