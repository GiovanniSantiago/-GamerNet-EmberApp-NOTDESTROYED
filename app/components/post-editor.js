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
			ajax({
                url:"",
				contentType:"application/json",
				data: JSON.stringify({
					title:this.get('title'),
					text_body:this.get('body'),
					author_id:this.get('authorId'),
					post_owner_id:this.get('ownerId')
				}),
				dataType: "json",
				method: "POST"
			}).then(function done(obj) {
				console.log(obj);
			},function error() {
				console.log("AAAAAAAAAAA");
			});
		}
	}
});