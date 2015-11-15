import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Component.extend({
	classNames:['container'],
	title:"untitled",
	body:"Say something!",
	authorId:"0",
	ownerId:"0",
	actions:{
		submitPost() {
			console.log(this.get('title')+"\n"+this.get('body')+"\n"+this.get('authorId')+"\n"+this.get('ownerId'));
			Ember.$.ajax({
				type: "POST",
				url: "//api-gamer-net.herokuapp.com/json/post",
				processData: false,
				contentType: 'application/json',
				data: JSON.stringify({
					title:this.get('title'),
					text_body:this.get('body'),
					author_id:this.get('authorId'),
					post_owner_id:this.get('ownerId')
				})
			}).then(function(data) {
				console.log(JSON.stringify(data));
			});
			
		}
	}
});