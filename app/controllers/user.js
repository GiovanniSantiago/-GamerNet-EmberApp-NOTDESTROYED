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
			}).then(function(data) {
				console.log(JSON.stringify(data));
			}).catch(function(error) {
				console.log("Could not post data. Error:\n");
				console.log(error);
			});
		}
	}
});
