import Ember from 'ember';  

export default Ember.Controller.extend({
     user_id:1,
    first_name:"",
    middle_name:"",
    last_name:"",
    email:"",
    user_name:"",
    country:"",
    date_of_birth:"",
    author_id:"",
    post_owner_id:"",
    avatar_id:"",
    actions:{
        readUserInformation(){
            Ember.$.ajax({
                            url: "//api-gamer-net.herokuapp.com/json/user/"+user_id,
                            processData:false,
                            contentType:'application/json',                
                            success: function(result){
                                console.log(result);
                            },
                            error: function(result){
                                console.log(result);
                            }
});
        }
    }
});