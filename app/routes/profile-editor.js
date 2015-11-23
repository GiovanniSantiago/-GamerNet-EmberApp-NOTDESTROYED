import Ember from 'ember';
import Adapter from 'gamernet-ember-3/adapters/adapter';
import session from 'gamernet-ember-3/models/local-session';

export default Ember.Route.extend({
	setupController: function(controller,model) {
		var adapter = Adapter.create();
		adapter.findPlain('user',session.user_id).then(function(user) {
			controller.set('first_name',user.first_name);
			controller.set('middle_name',user.middle_name);
			controller.set('last_name',user.last_name);
			controller.set('email',user.email);
			controller.set('user_name',user.user_name);
			controller.set('password',user.password);
			controller.set('country',user.country);
			controller.set('date_of_birth',user.date_of_birth);
		});
	},
});
