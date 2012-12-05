//alert("JavaScript works!");

//Troy Stevenson
// SDI 1212
// Project 3

var hero = { 
	name: "Superman",
	power: "Strangth",
	weakness: "Kriptonite",
	catchphrase: function () {
		console.log("I'll protect the people of Earth");
	}
};



console.log(hero);
hero.catchphrase();

for (var key in hero) {
	console.log("key: " + key + ", value: ", hero[key]); 	
};

var json = {
	"villans": {
		"0001": {
			"name":  "Lex",
			"hates": "Superman",
			"power": "brains"
			},
		"0002": {
			"name":  "Doomsday",
			"hates": "Superman",
			"power": "size"
			},
		"0003": {
			"name":  "General Zod",
			"hates": "Superman",
			"power": "yellow sun" 
		}
	}
};

for (var key in json.villans) {
	var villan = json.villans[key]
};

var json2 = {
	"friends": [
		{
			"id": "0001",
			"name":  "Lex",
			"hates": "Superman",
			"power": "brains"
		},
		{
			"id": "0002",
			"name":  "Doomsday",
			"hates": "Superman",
			"power": "size"
		},
		{
			"id": "0003",
			"name":  "General Zod",
			"hates": "Superman",
			"power": "yellow sun" 
		}
	]
};

var handleData = function(json){
	for (var i = 0; i < json.vilans.lenth; i++){
			var villan = json.villans[i];
			console.log("id: " + villan.id + ", name: " + villan.name + ", hates; " + villan.hates + ", power: " + villan.power); 
		}
};

handleData(json2);




















