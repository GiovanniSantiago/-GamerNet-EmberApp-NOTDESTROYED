import Ember from 'ember';

export default Ember.Component.extend({
	classNames:["panel","panel-default"],
	actions: {
		onComment(body,post_id) {
			console.log("userpostpanel oncomment");
			this.sendAction('onSubmitComment',this.get('body'), this.get('post_id'));
		}
	}
});
