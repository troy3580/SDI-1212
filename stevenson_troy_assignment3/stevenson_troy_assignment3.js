//alert("JavaScript works!");

//Troy Stevenson
// SDI 1212
// Project 3

var totalPower = 100; 
var myHero = "Superman";
var myVillan1 = "Lex";
var myVillan2 = "Doomsday";
var myVillan3 = "General Zod";
var willFight = true


var hero = { 
	Hero:        "Superman",
	Power:       "Strangth",
	Weakness:    "Kriptonite",
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

console.log("Where will the evin villans to spring their trap? ");

var theTrap = function() {
	console.log("The Secret Cave.");
};

theTrap();

var caveTunnel = 20;
var caveDepth = function (d) {
	var depth = d * caveTunnel;
	console.log(depth);
	return depth;
};

console.log("It is thought to be located under the ground. ");
caveDepth(893457345734558);
console.log("feet! ");

var foesBattle = true;
var hitsLanded = 105;
var hitsUsed = ["Punches", "Kicks", "Blasters"];
var numbersHit = [25, 25, 45];

console.log("It is " + foesBattle + " that there was a fight between good and evil. ");

var theFight = function () {
	if (hitsLanded > totalPower) {
		console.log("Superman will be captured "); 
		} else {
			console.log("Superman will stop the villans and save the day. ");
			} if (myVillan1 === true) {
				console.log("Superman can beat Lex. ");
			} 	else {
				  console.log("Superman will be in big trouble because " + 
				              myVillan2 + " and " + myVillan3 + 
				              "are from Kripton as well. "); 
		}
};

theFight();

var bigHits = function () {
	var hits = ("from " + myVillan2 + "and " + myVillan3 + "hurt Superman the most. ");
};

//I put in an easy 12 hours into this assignment and requested help or guidence at least 3 times through FSO and your gmail email.
//I had a lot of fun with this one but just don't have enough time in my 10 hour days 6 days a week of work to finish.
//I did not procrastinate onece either.






