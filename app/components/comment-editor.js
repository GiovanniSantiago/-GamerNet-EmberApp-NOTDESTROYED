import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		onSubmitPost() {
			let self = this;
			//console.log(this.get('title')+"\n"+this.get('body')+"\n"+this.get('authorId')+"\n"+this.get('ownerId'));
			this.sendAction('onSubmitComment',self.get('text'), self.get('post_id'));
		}
	}
});
