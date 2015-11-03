import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //this.route('group', {path:'/group/:group_id'});
  //this.route('post', {path:'post/:post_id'});
  //this.route('game');
  this.route('grouplist');
  this.route('group',{path:'/group/:group_id'});
  this.route('gamelist');
  this.route('eventlist');
  //this.route('matchrequest', {path:'match/:match_id'});
  //this.route('group', {path:'/group/:group_id'});
  this.route('user',{path:'/user/:user_id'});
  this.route('post', {path:'/post/:post_id'});
  this.route('game', {path:'/game/:game_id'});
  this.route('matchmaking');
  this.route('postTest', {});
});

export default Router;
