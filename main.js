//Task 1
var name = "John",
	time = "10:00",
	place = "Stryi";

var event = prompt ("Enter the event", "lesson");
console.log(name + " has a " + event + " today at " + time + " in " + place);
alert(name + " has a " + event + " today at " + time + " in " + place);

//---------------------------------------------

//Task2

var	euro, dollar;

do {
	euro = prompt("Enter the amount of euros", euro);
} while ((euro < 0) || isNaN(euro) || euro.trim() === "");

do {
	dollar = prompt("Enter the amount of dollars", dollar);
} while ((dollar < 0) || isNaN(dollar));

var euroGrn = euro * 32.24,
	dollarGrn = dollar * 27.2,
	euroDollar = 1.18;

alert(euro +" euros are equal "+ euroGrn + " grns, "+ dollar +" dollars are egual "+ dollarGrn + " grns, one euro is equal "+ euroDollar + " dollars."); 
  


