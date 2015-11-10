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
            var self = this;
            Ember.$.ajax({
                            type: "POST",
                            url: "//api-gamer-net.herokuapp.com/json/validateUser",
                            processData: false,
                            contentType: 'application/json',
                            data: JSON.stringify(data),
                            success: function(result) {
                                console.log(result);
                                console.log(JSON.stringify(result));
                                console.log(result.user_id);
                                self.transitionToRoute('user',result.user_id);
                                console.log('transition complete');
                            },
                            error:function(result){
                                console.log(JSON.stringify(result));
                            }
                        });
            
                    },
        createUser(){
            var self = this;

            var data = {    "first_name":this.first_name,
                            "middle_name":this.middle_name,
                            "last_name":this.last_name,
                            "email":this.email,
                            "user_name":this.user_name,
                            "password":this.password,
                            "country":this.country,
                            "date_of_birth":this.date_of_birth
                        };

            Ember.$.ajax({
                            type: "POST",
                            url: "//api-gamer-net.herokuapp.com/json/user",
                            processData: false,
                            contentType: 'application/json',
                            data: JSON.stringify(data),
                            success: function(result) {
                                console.log(" response correct: "+result);
                                console.log("transition complete");
                            },
                            error: function(result){
                                console.log(JSON.stringify(result)+" error");
                            }   
                        });
            
        }
	}
});