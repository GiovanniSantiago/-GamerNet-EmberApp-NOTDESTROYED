import Ember from 'ember';
import Ajax from 'ic-ajax';

export default Ember.Controller.extend({

	validate_email:"",
	validate_password:"",
    first_name:"",
    middle_name:"",
    last_name:"",
    email:"",
    user_name:"",
    password:"",
    country:"",
    date_of_birth:"",
    validate:true,
	actions:{
		validateUser(){

            var data = { "email" : this.validate_email,"password":this.validate_password };

            Ember.$.ajax({
                            type: "POST",
                            url: "//api-gamer-net.herokuapp.com/json/validateUser",
                            processData: false,
                            contentType: 'application/json',
                            data: JSON.stringify(data),
                            success: function(result) {
                            
                                console.log(result);

                            },
                error: function(result){
                    console.log(JSON.stringify(result));
                }
            });
            
        }
	}
});