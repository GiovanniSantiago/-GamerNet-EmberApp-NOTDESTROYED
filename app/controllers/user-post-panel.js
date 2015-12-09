import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		onComment(body,post_id) {
			this.sendAction('onSubmitComment',self.get('body'), self.get('post_id'));
		}
	}
});
