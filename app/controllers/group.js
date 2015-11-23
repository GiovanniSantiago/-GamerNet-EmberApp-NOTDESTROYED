import Ember from 'ember';
import session from 'gamernet-ember-3/models/local-session';
import App from 'gamernet-ember-3/models/generalClass';

export default Ember.Controller.extend({
	actions: {
		submitPost(title,body,category,date) {
			let data = {
				title:title,
				text_body:body,
				author_id:session.get('authorId'),
				post_owner_id:this.get('model').group.post_owner_id,
				post_category:category,
				datetime:date
			};

			console.log("Sending post");
			console.log(data);
			Ember.$.ajax({
				type: "POST",
				url: "//api-gamer-net.herokuapp.com/json/post",
				processData: false,
				contentType: 'application/json',
				data: JSON.stringify(data)
			}).then((function(data) {
				console.log(JSON.stringify(data));
				let posts = this.model.get('userPosts');
				Ember.$.ajax({
					type: "GET",
					url: "//api-gamer-net.herokuapp.com/json/post/"+data.post_id,
					processData: false,
					contentType: 'application/json'
				}).then((function(data) {
					this.get('model').get('groupPosts').pushObject(data);
				}).bind(this));
			}).bind(this));
		},
		
		joinGroup(){
			let data = {user_id:Number.parseInt(App.user_id),group_id:this.get("model").group.group_id}
			
			console.log("Sending addMember");
			console.log(data);
			
			Ember.$.ajax({
				type: "POST",
				url: "//api-gamer-net.herokuapp.com/json/addUserToGroup",
				processData: false,
				contentType: 'application/json',
				data: JSON.stringify(data)
			}).then(function(data){
				console.log(data);
			},function(data){
				console.log(data);
			})
			
		}
	}
});
