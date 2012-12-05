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



