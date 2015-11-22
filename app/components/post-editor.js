import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Component.extend({
	classNames:['container'],
	title:"untitled",
	body:"Say something!",
	authorId:"0",
	ownerId:"0",
	actions:{
		onSubmitPost() {
			let self = this;
			//console.log(this.get('title')+"\n"+this.get('body')+"\n"+this.get('authorId')+"\n"+this.get('ownerId'));
			this.sendAction('onSubmitPost',self.get('title'),self.get('body'),"GENERAL","01100110");
		}
	}
});
