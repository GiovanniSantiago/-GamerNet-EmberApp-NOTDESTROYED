import Ember from 'ember';

import App from 'gamernet-ember-3/models/generalClass';

export default Ember.Route.extend({
	model: function() {

		var getPromise = Ember.$.get("//api-gamer-net.herokuapp.com/json/post/unread/"+App.user_id);
		return getPromise.then(function(dat) {
			var delSettings = {
				type: "DELETE",
				url: "//api-gamer-net.herokuapp.com/json/post/unread/"+App.user_id
			};
			//Delete notified settings.
			Ember.$.ajax(delSettings);

			return dat;
		});
	}
});
