export default {
	RESTapi:"http://gamer-net.herokuapp.com/json/",
	restify(url) {
		return this.RESTapi + url;
	}
};