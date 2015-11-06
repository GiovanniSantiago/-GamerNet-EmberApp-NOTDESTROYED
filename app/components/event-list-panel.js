import Ember from 'ember';

export default Ember.Component.extend({
    classNames:['panel','panel-default'],
    activeTab:"MATCHMAKING",
    isMatchmakingTab: Ember.computed('activeTab',function(){return this.get('activeTab')==='MATCHMAKING';}),
    isUpEventsTab: Ember.computed('activeTab',function(){return this.get('activeTab')==="EVENTS";}),
    isAnnouncementTab: Ember.computed('activeTab',function(){return this.get('activeTab')==="ANNOUNCEMENT";}),
    
    actions:{
        setMatchmakingTab(){this.set('activeTab','MATCHMAKING');console.log('members');},
        setAnnouncementTab(){this.set('activeTab','ANNOUNCEMENT');console.log('members');},
        setEventsTab(){this.set('activeTab','EVENTS');console.log('events');}
    }
})