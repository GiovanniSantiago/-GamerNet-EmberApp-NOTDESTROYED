import Ember from 'ember';
import Ajax from 'ic-ajax';

export default Ember.Controller.extend({
	email:"",
	password:"",
	actions:{
		validateUser(){
			ember.$.get("gamer-net.herokuapp.com/json/user",function(data){
				alert(data);
			});
		}
	}
})
