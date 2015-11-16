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
			let self = this;
			console.log(this.get('title')+"\n"+this.get('body')+"\n"+this.get('authorId')+"\n"+this.get('ownerId'));

			let data = {
				title:self.get('title'),
				text_body:self.get('body'),
				author_id:self.get('authorId'),
				post_owner_id:self.get('ownerId'),
				post_category:"GENERAL",
				datetime:"01100110"
			};

			console.log(data);
			Ember.$.ajax({
				type: "POST",
				url: "//api-gamer-net.herokuapp.com/json/post",
				processData: false,
				contentType: 'application/json',
				data: JSON.stringify(data)
			}).then(function(data) {
				console.log(JSON.stringify(data));
			});

		}
	}
});
