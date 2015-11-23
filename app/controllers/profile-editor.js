import Ember from 'ember';
import Adapter from 'gamernet-ember-3/adapters/adapter';
import session from 'gamernet-ember-3/models/local-session';

export default Ember.Controller.extend({
	first_name:"",
	middle_name:"",
	last_name:"",
	email:"",
	user_name:"",
	password:"",
	country:"",
	date_of_birth:"",
	actions: {
		updateUser() {
			var self = this;
			var adapter = Adapter.create();
			var dat = {
				first_name:this.get('first_name'),
				middle_name:this.get('middle_name'),
				last_name:this.get('last_name'),
				email:this.get('email'),
				user_name:this.get('user_name'),
				password:this.get('password'),
				country:this.get('country'),
				date_of_birth:this.get('date_of_birth'),
				user_id:session.user_id
			};
			console.log("DAT SEND:");
			console.log(dat);
			adapter.updateUser(dat).then(function() {
				self.transitionToRoute('user',session.user_id);
			});
		}
	}
});
