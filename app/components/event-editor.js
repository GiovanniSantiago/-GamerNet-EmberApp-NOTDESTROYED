import Ember from 'ember';
import ajax from 'ic-ajax';
import Adapter from 'gamernet-ember-3/adapters/adapter';
import App from 'gamernet-ember-3/models/generalClass';

export default Ember.Component.extend({
	classNames:['container'],
	title:"untitled",
	category:"GENERAL",
	body:"Say something!",
	authorId:"0",
	ownerId:"0",
	actions:{
		onSubmitPost() {
	//insert into event_post values(1,'tital','text','132156','23235','TOURNAMENT',0)
			
	var data = {'author_id':App.get('author_id'),'title':this.title,'event_post_category':this.category,'text_body':this.body,'datetime':"56131321",'event_datetime':'000222111'};
			//console.log(this.get('title')+"\n"+this.get('body')+"\n"+this.get('authorId')+"\n"+this.get('ownerId'));
			Ember.$.ajax({
                type: "POST",
                url: "//api-gamer-net.herokuapp.com/json/eventpost",
                processData: false,
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function(result) {
                    console.log(result);
                    console.log(JSON.stringify(result));
                    console.log(result.user_id);
											},
				error:function(result){
				console.log(result);
									}
			});
						}
			}
});
