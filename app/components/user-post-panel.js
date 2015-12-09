import Ember from 'ember';

export default Ember.Component.extend({
	classNames:["panel","panel-default"],
	actions: {
		onComment(body,post) {
			console.log("userpostpanel oncomment");
			this.sendAction('onSubmitComment',body, post);
		}
	}
});
