//alert("JavaScript works!");

//Troy Stevenson
// SDI 1212
// Project 3

var goodGuy = { 
	name: "Superman",
	power: "Strangth",
	weakness: "Kriptonite",
	catchFrase: function () {
		console.log("I'll protect the people of Earth");
	}
};



console.log(goodGuy);
goodGuy.catchFrase();

for (var key in goodGuy) {
	console.log("key: " + key + ", value: ", goodGuy.key); 	

};
