import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('group', {path:'/group/:group_id'});
  this.route('user');
  this.route('post', {path:'post/:post_id'});
  this.route('game');
    this.route('group');
    this.route('gamelist');
  this.route('matchrequest', {path:'match/:match_id'});
});

export default Router;