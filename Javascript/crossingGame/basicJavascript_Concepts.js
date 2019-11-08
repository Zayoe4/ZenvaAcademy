// let maxHealth = 100; 
// var currentHealth = 50.5;
// currentHealth = 40.5;
// currentHealth = maxHealth; //100
// //maxHealth = currentHealth;
// var numberOfLives = 3;

// var isGameOver = false;
// isGameOver = true;
// var isAtEnd = false;

// var characterName = "Nimish";
// characterName = "Zenva"
// var age = 26;

// let message = 
// `Hi, my name is ${characterName} and my age is ${age}`;

// let length = characterName.length;
// let upperName = characterName.toUpperCase();
// characterName = characterName.toLowerCase();

// let zen = characterName.slice(0, 3);

// var level = 1;
// var title = `Level ${level}`;

// var health = 50;

// // + - * / % **
// health = health + 10; // 60
// health = health % 50; // 10
// // health % 2 == 0
// health = health ** 2; // 100

// // +=, -=, *=, /=
// health -= 20; // health = health - 20

// // ++ --
// health++; // 81

// // health = (health * 2) + (health / 5);

// health++;
// health = health + 1;
// health += 1;

// // > >= < <= == !=
// var number1 = 5;
// var number2 = 10;

// var result = number1 > number2; // false
// result = number1 != number2; // true

// var string1 = "hello"
// var string2 = "world"
// result = string1 == string2; // false

// // !, ||, &&
// result = !result; // true
// result = number1 > number2 && string1 == string2; // false
// number2 = number1;
// result = number1 == number2 || string1 == string2; // true

// // ? :
// result = number1 > number2 ? number1 : number2;
// var numberOfLives = 3;

// var isGameOver = !(numberOfLives > 0);

// var inventory = ["shirt", "axe", "bread"];
// // inventory = ["water", "pants"];

// let shirt = inventory[0];
// inventory[2] = "cheese";

// var length = inventory.length // 3
// length = inventory[0].length; // 5

// inventory.push("water"); // ["shirt", "axe", "cheese", "water"]
// var water = inventory.pop();

// var levels = [
// 	[1.1, 1.2, 1.3],
// 	[2.1, 2.2, 2.3, 2.4],
// 	[3.1, 3.2],
// ];

// var firstLevels = levels[0]; // [1.1, 1.2, 1.3]
// var secondLevel = levels[0][1]; // 1.2

// var seventhLevel = levels[1].pop();
// levels[1].pop();
// levels[1].push(seventhLevel);
// levels[2].push(3.3);

// var inventory = {
// 	"shirts": 2,
// 	"axe": 1,
// 	"bread": 3,
// };

// var keys = Object.keys(inventory);
// var values = Object.values(inventory);

// var numAxes = inventory["axe"]; // 1
// inventory["axe"] = 2;
// inventory["knife"] = 1;

// let maxHealth = 100;
// var currentHealth = 50;
// // var healingFactor = 40;

// function healByAmount(healAmount = 10) {
// 	let finalHealth = currentHealth + healAmount;
// 	currentHealth = finalHealth > maxHealth ? maxHealth : finalHealth;
// 	return calculatePercentHealth();
// }

// function calculatePercentHealth() {
// 	return (currentHealth / maxHealth) * 100;
// }

// // function heal() {
// // 	let finalHealth = currentHealth + healingFactor;
// // 	currentHealth = finalHealth > maxHealth ? maxHealth : finalHealth;

// // 	// currentHealth += healingFactor;
// // 	// function multiplyHealingFactor() {
		
// // 	// }
// // }
// // var heal = function() {
// // 	currentHealth += healingFactor;
// // }

// // heal(); // currentHealth = 90
// let percentHealth = healByAmount(30);

// var keyPressed = "l";
// var xPos = 0;
// let endPos = 5;
// let startPos = 0;

// // if (keyPressed == "r" && xPos < endPos) {
// // 	xPos += 1;
// // } 

// if (keyPressed == "r") {
// 	if (xPos < endPos) {
// 		xPos += 1;
// 	}
// } else if (keyPressed == "l") {
// 	if (xPos > startPos) {
// 		xPos -= 1;
// 	}
// } else {
// 	xPos = 0;
// }

// // var someNum = 5;

// // if (someNum > 4) {
// // 	xPos += 1;
// // }
// // if (someNum > 2) {
// // 	xPos -= 1;
// // }

// let endPos = 10;
// var xPos = 0;
// var enemyPos = 4;
// var isGameOver = false

// // while(pos < endPos) {
// // 	pos++;
// // }

// // while(!isGameOver) {
// // 	xPos++;
// // 	if (xPos >= endPos || xPos == enemyPos) {
// // 		isGameOver = true;
// // 	}
// // }

// // break
// // while(xPos < endPos) {
// // 	xPos++;
// // 	if (xPos == enemyPos) {
// // 		break;
// // 	}
// // }

// // while(xPos < endPos) {
// // 	if (xPos % 2 == 1) {
// // 		xPos += 2;
// // 		continue;
// // 	}
// // 	xPos++;
// // 	if (xPos == enemyPos) {
// // 		break;
// // 	}
// // }

// function movePlayer() {
// 	while(xPos < endPos) {
// 		xPos++;
// 		if (xPos == enemyPos) {
// 			return;
// 		}
// 	}
// }

// var inventory = {
// 	"clothes": 2,
// 	"tools": 3,
// 	"food": 5,
// 	"weapons": 1,
// };

// var values = Object.values(inventory);
// var totalItems = 0;

// for (var i = 0; i < values.length; i++) {
// 	var quantity = values[i];
// 	totalItems += quantity;
// }

// inventory.forEach(function(key, value) {
// 	inventory[key] += 1;
// });

// var gameCharacter = {
// 	name: "Nimish",
// 	xPos: 0,
// 	yPos: 0,
// 	move: function(xAmount, yAmount) {
// 		this.xPos += xAmount;
// 		this.yPos += yAmount;
// 	}
// }

// let name = gameCharacter.name;
// let xPos = gameCharacter.xPos;
// gameCharacter.yPos = 3;
// gameCharacter.move(2, -1);

// gameCharacter.speed = 5;

// var characters = [
// 	{
// 		xPos: 0,
// 		yPos: 0,
// 		move: function(xAmount, yAmount) {
// 			this.xPos += xAmount;
// 			this.yPos += yAmount;
// 		}
// 	},
// 	{
// 		xPos: 0,
// 		yPos: 10,
// 		move: function(xAmount, yAmount) {
// 			this.xPos += xAmount;
// 			this.yPos += yAmount;
// 		}
// 	},
// ];

// characters.forEach(function(element) {
// 	element.move(5, 0);
// })

// var move = function(xAmount, yAmount) {
// 	this.xPos += xAmount;
// 	this.yPos += yAmount;
// }

// var GameCharacter = function(name, x, y, move) {
// 	this.name = name;
// 	this.xPos = x;
// 	this.yPos = y;
// 	this.move = move;
// }

// var newCharacter1 = new GameCharacter("Nimish", 0, 0, move);
// var newCharacter2 = new GameCharacter("Nimish", 1, 5, move);
// var newCharacter3 = new GameCharacter("Nimish", 3, 6, move);

// newCharacter1.name = "Zenva";
// newCharacter3.move(0, 3);

// GameCharacter.prototype.speed = 5;

// var characters = [
// 	new GameCharacter("Char 1", 1, 2, move),
// 	new GameCharacter("Char 2", 3, 4, move),
// ];

// characters.forEach(function(element){
// 	element.move(5, 2);
// });

// class GameCharacter {
// 	constructor(name, xPos, yPos) {
// 		this.name = name;
// 		this.xPos = xPos;
// 		this.yPos = yPos;
// 	}

// 	move(xAmount, yAmount) {
// 		this.xPos += xAmount;
// 		this.yPos += yAmount;
// 	}
// }

// class NonPlayerCharacter extends GameCharacter {
// 	constructor(name, xPos, yPos, speed) {
// 		this.speed = speed;
// 		super(name, xPos, yPos);
// 	}

// 	move(xAmount) {
// 		super.move(xAmount, 0);
// 	}
// }

// // var character1 = new GameCharacter('Nimish', 0, 1);
// // character1.name = "fdfsda";
// // character1.xPos = 5;
// // character1.move(1, 4);
