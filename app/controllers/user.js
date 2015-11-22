import Ember from 'ember';
import session from 'gamernet-ember-3/models/local-session';

export default Ember.Controller.extend({
	actions: {
		submitPost(title,body,category,date) {
			let data = {
				title:title,
				text_body:body,
				author_id:session.get('authorId'),
				post_owner_id:this.get('model').user.post_owner_id,
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
					this.get('model').get('userPosts').pushObject(data);
				}).bind(this));
			}).bind(this));

		},
		submitFriend() {
			let data = {
				user_id:this.get('model').user.user_id,
				friend_id:session.get('userId'),
				category:"GENERAL"
			};

			console.log("requesting friend");

			Ember.$.ajax({
				type: "POST",
				url: "//api-gamer-net.herokuapp.com/json/friend",
				processData: false,
				contentType: 'application/json',
				data: JSON.stringify(data)
			}).then((function(d) {
				console.log("request successful!");
			}).bind(this),
			(function(d) {
				console.log("request failed!");
				console.log(d);
			}).bind(this));
		}
	}
});
