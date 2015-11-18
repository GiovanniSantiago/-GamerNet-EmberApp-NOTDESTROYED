import Ember from 'ember';
var session = Ember.Object.create({
	loggedIn: false,
	userId: 0,
	suthorId: 0,
	password: ""
});



export default session;
