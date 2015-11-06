import ajax from 'ic-ajax';
import Ember from 'ember';


export default Ember.Object.extend({
	find: function(name, id) {
		//return ajax("http://www.reddit.com/r/" + id + ".json");
		return ajax("")
	}
});
