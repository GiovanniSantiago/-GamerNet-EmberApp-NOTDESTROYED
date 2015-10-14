import Ember from 'ember';

export default Ember.Component.extend({
    className:['panel-heading'],
    activeTab:"NEWEST",
    isNewestTab: Ember.computed('activeTab',function(){return this.get('activeTab')==="NEWEST"}),
    isHighTab: Ember.computed('activeTab',function(){return this.get('activeTab')==="HIGH"}),
    actions:{
    setNewestTab(){
        this.set('activeTab','NEWEST')},
    setHighTab(){
    this.set('activeTab',"HIGH")}
        
    }
});