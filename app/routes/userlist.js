import Ember from 'ember';

import Adapter from 'gamernet-ember-3/adapters/adapter';

import App from 'gamernet-ember-3/models/generalClass';


export default Ember.Route.extend({
   	model(){
            let adapter = Adapter.create();
            let response = adapter.findAll("users",{user_id:App.user_id}).then(function(rsut){
                console.log(rsut);
                return rsut;
            });
        
            console.log("response: "+response);
        
            return response;
        
            
    } 
});