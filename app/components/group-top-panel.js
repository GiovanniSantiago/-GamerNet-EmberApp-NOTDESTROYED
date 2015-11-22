import Ember from 'ember';

export default Ember.Component.extend({
	classNames:["panel","panel-default"],
    activeTab:"MEMBERS",
    isMembersTab: Ember.computed('activeTab',function(){return this.get('activeTab')==='MEMBERS';}),
    isEventsTab: Ember.computed('activeTab',function(){return this.get('activeTab')==="EVENTS";}),
    
    actions:{
        setMembersTab(){this.set('activeTab','MEMBERS');console.log('members');},
        setEventsTab(){this.set('activeTab','EVENTS');console.log('events');},
		onJoinGroup(){
			
			this.sendAction("onJoinGroup");
			console.log("group-top-panel onJoinGroup action")
		}
   
	}

});