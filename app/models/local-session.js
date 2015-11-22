import Ember from 'ember';
import General from 'gamernet-ember-3/models/generalClass';
var session = Ember.Object.create({
	loggedIn: false,
	userId: 0,
	authorId: 0,
	password: ""
});



export default General;
