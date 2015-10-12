import DS from 'ember-data';

var dummyUsers = [
	{
		user_id:0,
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
		groups: [0]
	},
	{
		user_id:1,
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
		groups: [0]
	},
	{
		user_id:2,
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
		groups: [0]
	},
	{
		user_id:3,
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
		groups: [0]
	},
	{
		user_id:4,
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
		groups: [0]
	}
];

export default DS.Model.extend({
	
});
