//import ajax from 'ic-ajax';
import Ember from 'ember';

var dummyData = {
	
	game:[
		{
			game_id:0,
			name:"Wargame 20XX",
			desc:"WAR WAR WAR GUNS DEATH BULLETS GUNS WAR WAR WAR GUNS DEATH BULLETS GUNS WAR WAR WAR GUNS DEATH BULLETS GUNS WAR WAR WAR GUNS DEATH BULLETS GUNS WAR WAR WAR GUNS DEATH BULLETS GUNS WAR WAR WAR GUNS DEATH BULLETS GUNS WAR WAR WAR GUNS DEATH BULLETS GUNS WAR WAR WAR GUNS DEATH BULLETS GUNS WAR WAR WAR GUNS DEATH BULLETS GUNS WAR WAR WAR GUNS DEATH BULLETS GUNS WAR WAR WAR GUNS DEATH BULLETS GUNS WAR WAR WAR GUNS DEATH BULLETS GUNS",
			platforms: ["PS4","PS6","WiiUU","XBAG","GAMEHYPERCUBE"],
			genres:["PUZZLE","ZEN","SANDBOX","COOKING"],
			reviews:[0,1],
			matchmakings:[0,1],
			groups:[1],
			image:"http://icons.iconarchive.com/icons/icons8/windows-8/512/Animals-Ant-icon.png"
		},
		{
			game_id:1,
			name:"Cooking Papa",
			desc:"FLOUR FLOUR FLOUR SUGAR BAKING MILK SUGAR FLOUR FLOUR FLOUR SUGAR BAKING MILK SUGAR FLOUR FLOUR FLOUR SUGAR BAKING MILK SUGAR FLOUR FLOUR FLOUR SUGAR BAKING MILK SUGAR FLOUR FLOUR FLOUR SUGAR BAKING MILK SUGAR FLOUR FLOUR FLOUR SUGAR BAKING MILK SUGAR FLOUR FLOUR FLOUR SUGAR BAKING MILK SUGAR FLOUR FLOUR FLOUR SUGAR BAKING MILK SUGAR FLOUR FLOUR FLOUR SUGAR BAKING MILK SUGAR FLOUR FLOUR FLOUR SUGAR BAKING MILK SUGAR",
			platforms: ["4DSXXL","GameBoyUltra"],
			genres:["TORTURE SIM","EXISTENTIAL PHILOSOPHICAL","RATED AO","WARGAME SIMULATOR SIMULATOR"],
			reviews:[2,3],
			matchmakings:[2,3],
			groups:[0],
			image:"http://icons.iconarchive.com/icons/icons8/windows-8/512/Animals-Cat-icon.png"
		}
	],
	group:[
		{
			group_id:0,
			owner_id:1,
			name:"Peaceful Puzzle Players",
			desc:"PAIN SUFFERING DESTRUCTION RAISIN-OATMEAL-COOKIES SADNESS SICKNESS PAIN PAIN PAIN SUFFERING DESTRUCTION RAISIN-OATMEAL-COOKIES SADNESS SICKNESS PAIN PAIN PAIN SUFFERING DESTRUCTION RAISIN-OATMEAL-COOKIES SADNESS SICKNESS PAIN PAIN PAIN SUFFERING DESTRUCTION RAISIN-OATMEAL-COOKIES SADNESS SICKNESS PAIN PAIN PAIN SUFFERING DESTRUCTION RAISIN-OATMEAL-COOKIES SADNESS SICKNESS PAIN PAIN PAIN SUFFERING DESTRUCTION RAISIN-OATMEAL-COOKIES SADNESS SICKNESS PAIN PAIN PAIN SUFFERING DESTRUCTION RAISIN-OATMEAL-COOKIES SADNESS SICKNESS PAIN PAIN ",
			leader:0,
			members:[0,1,2,3],
			relatedGames:[1],
			relatedGenres:["PUZZLE","ZEN","SANDBOX","COOKING"],
			posts:[0,1]
		},
		{
			group_id:1,
			owner_id:4,
			name:"Masochistic Meandering Manslaughterers",
			desc:"HAPPY COOKING CHOCOLATE-CHIP-COOKIES SUGAR PEACE CANDY-SHOPS DELICIOUS-BROWNIES HAPPY COOKING CHOCOLATE-CHIP-COOKIES SUGAR PEACE CANDY-SHOPS DELICIOUS-BROWNIES HAPPY COOKING CHOCOLATE-CHIP-COOKIES SUGAR PEACE CANDY-SHOPS DELICIOUS-BROWNIES HAPPY COOKING CHOCOLATE-CHIP-COOKIES SUGAR PEACE CANDY-SHOPS DELICIOUS-BROWNIES HAPPY COOKING CHOCOLATE-CHIP-COOKIES SUGAR PEACE CANDY-SHOPS DELICIOUS-BROWNIES HAPPY COOKING CHOCOLATE-CHIP-COOKIES SUGAR PEACE CANDY-SHOPS DELICIOUS-BROWNIES HAPPY COOKING CHOCOLATE-CHIP-COOKIES SUGAR PEACE CANDY-SHOPS DELICIOUS-BROWNIES HAPPY COOKING CHOCOLATE-CHIP-COOKIES SUGAR PEACE CANDY-SHOPS DELICIOUS-BROWNIES",
			leader:1,
			members:[0,1,2,3],
			relatedGames:[0],
			relatedGenres:["TORTURE SIM","EXISTENTIAL PHILOSOPHICAL","RATED AO","WARGAME SIMULATOR SIMULATOR"],
			posts:[2,3]
		}
	],
	matchrequest:[
		{
			matchId:0,
			gameId:0,
			requesterId:0,
			platforms:["4DSXXL","GameBoyUltra"],
			title:"HELP ME BEAT THE GAME",
			description:"HELP, THIS GAME IS TOO HARD AND SCARY, HELP"
		},
		{
			match_id:1,
			game_id:0,
			requesterId:0,
			platforms:["4DSXXL","GameBoyUltra"],
			title:"SERIOUSLY HELP",
			description:"IF I DON'T BEAT THIS GAME MY FAMILY WILL KICK ME OUT"
		},
		{
			match_id:2,
			game_id:0,
			requesterId:0,
			platforms:["4DSXXL","GameBoyUltra"],
			title:"WHY IS THERE NOBODY HERE TO HELP",
			description:"OKAY I WAS EXAGGERATING BUT REALLY, SERIOUSLY I NEED TO BEAT THIS GAME IT'S IMPORTANT. IF YOU HELP ME BEAT IT I'LL GIVE YOU... UH... ETERNAL GRATITUDE!!!"
		},
	],
	post:[
		{
			post_id:0,
			title:"I CAN'T BEAT THIS PART",
			author_id:0,
			category:"QUESTION",
			text:"THIS PART IS REALLY HARD. THUMB UP IF YOU THINK I SHOULD ASK FOR HELP IN A MATCH REQUEST.",
			image:"http://icons.iconarchive.com/icons/icons8/windows-8/512/Cinema-Triller-icon.png",
			owner_id:0
		}
	],
	review:[
		{
			//title
			//text
			//authorId
			//ratingPoints
			review_id:0,
			game_id:0,
			title:"TOO HARD",
			author_id:0,
			ratingPoints:1,
			text:"THIS GAME IS WAY TOO HARD, DON'T BUY, NOBODY WILL HELP YOU BEAT IT!!!!"
			
		}
	],
	user:[
		{
			user_id:0,
			owner_id:0,
			name:"JIMBLES",
			age:45,
			country:"ICELANDIA",
			languages:["ENGRISH","SPANISH","SPANGLISH","SPANGRISH"],
			gamelists: {
				owns:[0],
				wishes:[1],
				likes:[0]
			},
			friends: [1,2],
			groups: [0],
			avatar: "http://icons.iconarchive.com/icons/icons8/windows-8/512/Cinema-Superman-icon.png"
		},
		{
			user_id:1,
			owner_id:2,
			name:"JAMBLES",
			age:45,
			country:"ACELANDIA",
			languages:["ENGRASH","SPANASH","SPANGLASH","SPANGRASH"],
			gamelists: {
				owns:[0,1],
				wishes:[],
				likes:[0,1]
			},
			friends: [0,2],
			groups: [0],
			avatar: "http://icons.iconarchive.com/icons/icons8/windows-8/512/Cinema-Tardis-icon.png"
		},
		{
			user_id:2,
			owner_id:3,
			name:"JOBLES",
			age:45,
			country:"OLANDIA",
			languages:["ENGROH","SPANOH","SPANGLOH","SPANGROH"],
			gamelists: {
				owns:[],
				wishes:[0,1],
				likes:[0]
			},
			friends: [0,1],
			groups: [0],
			avatar: "http://icons.iconarchive.com/icons/icons8/windows-8/512/Cinema-The-Flash-Head-icon.png"
		},
		{
			user_id:3,
			owner_id:5,
			name:"JEBLES",
			age:45,
			country:"ELANDIA",
			languages:["ENGREH","SPANEH","SPANGLEH","SPANGREH"],
			gamelists: {
				owns:[0],
				wishes:[1],
				likes:[0]
			},
			friends: [4],
			groups: [0],
			avatar: "http://icons.iconarchive.com/icons/icons8/windows-8/512/Cinema-The-Flash-Sign-icon.png"
		},
		{
			user_id:4,
			owner_id:6,
			name:"Frederick",
			age:45,
			country:"Argentina",
			languages:["Español","Ingles"],
			gamelists: {
				owns:[0],
				wishes:[1],
				likes:[0]
			},
			friends: [3],
			groups: [0],
			avatar: "http://icons.iconarchive.com/icons/icons8/windows-8/512/Cinema-Thor-icon.png"
		}
	]
};

let searchBy = function(array, propname, value)
{
	console.log("array: "+array);
	console.log("propname: "+propname);
	console.log("value: "+value);
	for(let i = 0; i < array.length; i++)
		{
			if(array[i][propname]==value)
				return array[i];
		}
};

let accumBy = function(array, propname, value)
{
	let res = [];
	for(let i = 0; i < array.length; i++)
		{
			if(array[i][propname]==value)
				res.push(array[i]);
		}
	return res;
};

export default Ember.Object.extend({
	find: function(name,id){
		console.log("FIND ("+name+","+id+")");
		return searchBy(dummyData[name],name+"_id",id);
	},
	accumCustom: function(name,param,val){
		console.log("ACCUMCUSTOM ("+name+","+param+","+val+")");
		return accumBy(dummyData[name],param,val);
	},
	getAll: function(name){
		console.log("GETALL ("+name+")");
		return dummyData[name];
	}
});