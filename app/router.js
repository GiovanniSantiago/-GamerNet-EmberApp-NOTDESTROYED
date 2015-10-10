import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', {path:'user'},function() {
      this.route('show',{path:":user_id"}, function() {
          this.route('friends',{path:"friends"});
          this.route('groups',{path:"groups"});
          this.route('games',{path:"games"});
      });
  });

  this.route('profile', {path:'profile'}, function() {
    this.route('friends', {path:'friends'});
    this.route('groups', {path:'groups'});
    this.route('games', {path:'games'});
  });
});

export default Router;
