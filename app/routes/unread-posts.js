import Ember from 'ember';


export default Ember.Route.extend({
	model: function() {
		var settings = {
			type: "GET",
			url: "//api-gamer-net.herokuapp.com/json/post/unread",
			processData: false,
			contentType: 'application/json'
		};

		var getPromise = Ember.$.ajax(settings);
		return getPromise.then(function(dat) {
			var delSettings = {
				type: "DELETE",
				url: "//api-gamer-net.herokuapp.com/json/post/unread",
				processData: false,
				contentType: 'application/json'
			};
			//Delete notified settings.
			Ember.$.ajax(delSettings);

			return dat;
		});
	}
});
