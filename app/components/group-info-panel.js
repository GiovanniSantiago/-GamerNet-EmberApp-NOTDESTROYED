import Ember from 'ember';

export default Ember.Component.extend({
    classNames:['panel', 'panel-default'],
	actions:{
		joinGroup(){
			
			this.sendAction("onJoinGroup");
			console.log("group-info-panel joinGroup action");
		}
	}
});