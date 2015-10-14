import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		console.log("group route : "+params.group_id);
		return {};
        //return dummyGroups[params.group_id];
	}
});
