import Ember from 'ember';


export default Ember.Route.extend({
	model: function() {

		var getPromise = Ember.$.get("//api-gamer-net.herokuapp.com/json/post/unread");
		return getPromise.then(function(dat) {
			var delSettings = {
				type: "DELETE",
				url: "//api-gamer-net.herokuapp.com/json/post/unread"
			};
			//Delete notified settings.
			Ember.$.ajax(delSettings);

			return dat;
		});
	}
});
