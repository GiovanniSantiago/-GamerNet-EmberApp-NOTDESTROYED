import Ember from 'ember';

export default Ember.Component.extend({
    classNames:['panel', 'panel-default'],
	actions:{
		joinGroup(){
			console.log("group-info-panel joinGroup action");
			this.sendAction("onJoinGroup");
		}
	}
});