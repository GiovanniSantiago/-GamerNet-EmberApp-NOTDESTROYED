import Ember from 'ember';
import Ajax from 'ic-ajax';

export default Ember.Controller.extend({
	email:"",
	password:"",
    validate:true,
	actions:{
		validateUser(){
            var data = { "email" : this.email,"password":this.password };
Ember.$.ajax({
    type: "POST",
    url: "//api-gamer-net.herokuapp.com/json/validateUser",
    processData: false,
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function(result) {
        console.log(result);

}});
            
            ////
//			Ember.$.post("//api-gamer-net.herokuapp.com/json/validateUser",JSON.stringify({"email": "this.email","password":"this.password"})).then(function(data){
//                
//                    console.log("validate user. "+data);
//              
//            },function(data){
//                console.log("validate user fails."+JSON.stringify(data));
//            });
		}
	}
});