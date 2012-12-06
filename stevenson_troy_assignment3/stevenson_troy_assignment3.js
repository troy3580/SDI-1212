//alert("JavaScript works!");

//Troy Stevenson
// SDI 1212
// Project 3




var hero = { 
	Hero: "Superman",
	Power: "Strangth",
	Weakness: "Kriptonite",
	Catchphrase: function() {
		console.log("I'll protect the people of Earth from these evil villans!");
	}
};

console.log(hero);
hero.Catchphrase();

console.log("Evil Villan Top Secret Files. ");

var json1 = {
	"villans": [
		{
			"id":    "0001.",
			"name":  "Lex.",
			"hates": "Superman.",
			"power": "Brains."
		},
		{
			"id":    "0002.",
			"name":  "Doomsday.",
			"hates": "Superman.",
			"power": "Size."
		},
		{
			"id":    "0003.",
			"name":  "General Zod.",
			"hates": "Superman.",
			"power": "Yellow Sun." 
		}
	]
};

var handleData = function(json1) {
	for (var i = 0; i < json1.villans.length; i++) {
		var villan = json1.villans[i];
		console.log("Id: " + villan.id + " Name: " + villan.name + " Hates: " + villan.hates + " Power: " + villan.power);
	};	
};

handleData(json1);

var hits = {
	"name":     "myStrangth",
	"punches":  30,
	"kicks":    30,
	"blasters": 40, 
	"total" :   function() {
		var totalDamage = this.punches + this.kicks + this.blasters;
		return totalDamage;
	}
};

console.log("Before they can capture Superman the villans need to hit him " + hits.total() + " times. ");















