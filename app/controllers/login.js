import Ember from 'ember';
import Ajax from 'ic-ajax';

export default Ember.Controller.extend({
	email:"email",
	password:"password",
	actions:{
		validateUser(){
			Ember.$.post("//gamer-net.herokuapp.com/json/validateUser",{"email": "this.email","password":"this.password"}).then(function(data){
                
                    alert("validate user. "+data);
              
            },function(data){
                console.log("validate user fails."+JSON.stringify(data));
            });
		}
	}
});