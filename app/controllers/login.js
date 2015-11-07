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
            var data = { "email" : this.email,"password":this.password };
			Ember.$.ajax({
				type: "POST",
				url: "//api-gamer-net.herokuapp.com/json/validateUser",
				processData: false,
				contentType: 'application/json',
				data: JSON.stringify(data),
				success: function(result) {
					console.log(result);
				}
			});
            
            ////
//			Ember.$.post("//api-gamer-net.herokuapp.com/json/validateUser",JSON.stringify({"email": "this.email","password":"this.password"})).then(function(data){
//                
//                    console.log("validate user. "+data);
//              
//            },function(data){
//                console.log("validate user fails."+JSON.stringify(data));
//            });

                }
            });
            
        },
        createUser(){
            var data = {"first_name":this.first_name,
    "middle_name":this.middle_name,
    "last_name":this.last_name,
    "email":this.email,
    "user_name":ths.user_name,
    "password":this.password,
    "country":this.country,
    "date_of_birth":this.date_of_birth}
        }
	}
});