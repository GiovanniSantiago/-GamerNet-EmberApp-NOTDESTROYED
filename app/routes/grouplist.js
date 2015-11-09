import Ember from 'ember';

import Adapter from 'gamernet-ember-3/adapters/adapter';


export default Ember.Route.extend({
   	model(){
        let adapter = Adapter.create();
            let response = adapter.findAll("group");
        console.log(response);
        
            
    } 
});