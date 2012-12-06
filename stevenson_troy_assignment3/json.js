//alert("JavaScript works!");

//Troy Stevenson
// SDI 1212
// Project 3


//json

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















