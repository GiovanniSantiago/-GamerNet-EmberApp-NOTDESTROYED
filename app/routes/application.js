import Ember from 'ember';
import App from 'gamernet-ember-3/models/generalClass';

export default Ember.Route.extend({
   model: function(params){
       return App.user_id;
   } 
});
