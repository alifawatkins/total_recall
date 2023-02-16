// Example of What your JS File in VS Code should look like


/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/


// I. Variables & Data Types
// A. Q + A
/* 
1. You assign a value to a variable by declaring var/let/const + the name of the variable + "=" and then the value you want to assign
2. You change the value of a variable by reassigning a new value to it with name + "=" and then the new value. 
3. You make the new variable's value equal to the existing variable 
4. Declare: Registers a variable in the corresponding scope
   Assign: Sets a specified values to the variable
   Define: Naming a variable (has a set of rules)
5. Fake code- I guess you can use it when you're trying to think out the logic of a problem before actally coding anything. 
6. Is this a real figure?? or a trick question? I say, as long as you need! 
*/
// B. Strings
var firstVariable = "Hello World"
firstVariable = 12
var secondVariable = firstVariable
secondVariable = "It's Saturday Night"
console.log(firstVariable); //Output: 12
const yourName = "Alifa"
function print() {
	console.log(`Hello, my name is ${yourName}`)
}
print();

// C. Booleans
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a != b);
  console.log(c != d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');
// D. The Farm
let animal = "ant"
if (animal === "cow") {
	console.log("Mooooooo");
} else {
	console.log("Hey! You're not a cow.")
}

// E. Driver's Ed
let yourAge = 15
if (yourAge >= 16) {
	console.log("Here are the keys!")
} else if (yourAge < 16) {
	console.log("Sorry, you're too young.")
}
//_____________________________________________________________

// II. Loops
// A. The Basics
for (let i = 0; i <= 10; i++){
	console.log(i);
}

for (let i = 10; i <= 400; i++){
	console.log(i);
}

for (let i = 12; i < 4000; i+=3){
	console.log(i);
}
// B. Get even
for (let i = 1; i <= 100; i++){
	if (i % 2 === 0) {
		console.log(`${i} <-- is an even number`)
	} else {
		console.log(i);
	}
}

// C. Give me Five
for (let i = 0; i <= 100; i++){
	if (i % 5 === 0 && i % 3 === 0) {
		console.log(`I found a ${i}. High Five! Three is a crowd`)
	} else if (i % 3 === 0) {
		console.log(`I found a ${i}. Three is a crowd`)
	} else if (i % 5 === 0) {
		console.log(`I found a ${i}. High Five!`)
	}
}
// D. Savings account
let bankAccount = 0;
for (let i = 1; i <= 10; i++) {
	bankAccount +=i; 
}
console.log(bankAccount)

let bankAccountBonus = 0;
for (let i = 1; i <= 100; i++) {
	bankAccountBonus +=i * 2; 
}
console.log(bankAccountBonus)
//_____________________________________________________________

// III. Arrays & Control Flow
// A. Talk about it:
/*
1. Elements
2. Yes
3. A deck of cards in a box
*/
// B. Easy Does It
const quotes = ["I'm not throwing away my shot", "I'm willing to wait for it", "What did I miss?"]
// C. Accessing elements
const randomThings = [1, 10, "Hello", true]
console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings);
// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log(ourClass[2]);
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);
// E. Mix It Up
const myArray = [5, 10, 500, 20]
myArray.push("Aegon");
myArray.push("Hungry");
myArray.shift();
console.log(myArray);
myArray.unshift("Bob Marley");
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(myArray);
// F. Biggie Smalls
let integer = 100;
if (integer < 100) {
	console.log("little number")
} else if (integer >= 100) {
	console.log("big number")
}
// G. Monkey in the Middle
let integerTwo = 7;
if (integerTwo < 5) {
	console.log("little number")
} else if (integerTwo > 10) {
	console.log("big number")
} else {
	console.log("monkey")
}
// H. What's in Your Closet?
const kristynsCloset = [
	"left shoe",
	"cowboy boots",
	"right sock",
	"Per Scholas hoodie",
	"green pants",
	"yellow knit hat",
	"marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
	[
	  // These are Thom's shirts
	  "grey button-up",
	  "dark grey button-up",
	  "light blue button-up",
	  "blue button-up",
	],[
	  // These are Thom's pants
	  "grey jeans",
	  "jeans",
	  "PJs"
	],[
	  // Thom's accessories
	  "wool mittens",
	  "wool scarf",
	  "raybans"
	]
  ];
console.log(`Kristyn is rocking that ${kristynsCloset[4]} today!`)

kristynsCloset.splice(6,0,"raybans");
console.log(kristynsCloset);
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

thomsCloset[0][0]
thomsCloset[1][0]
thomsCloset[2][1]
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][1]}!`);
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1][2]);
//_____________________________________________________________

// IV. Functions
// A. You so snarky.
// B.
function printCool(name) {
	return `${name} is cool`;
}
console.log(printCool("Captain Reynolds"))
// C.
function calculateCube (number) {
	return number * number * number; 
}

console.log(calculateCube(5));
// D.
function isVowel (letter) {
	letter = letter.toLowerCase();
	if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
		return true;
	} else {
		return false;
	}
}
console.log(isVowel("a"));
console.log(isVowel("b"));
console.log(isVowel("A"));
// E.
function getTwoLengths(str1, str2){
	return [str1.length, str2.length]; 
}
console.log(getTwoLengths("Hank", "Hippopopalous"));
// F.
function getMultipleLengths(strings) {
	let stringsLength = [];

	for(let i=0; i <strings.length; i++) {
		stringsLength.push(strings[i].length);
	}

	return stringsLength;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G.
function maxOfThree(num1,num2,num3) {
	if (num1 >= num2 && num1 >= num3) {
		return num1;
	  } else if (num2 >= num1 && num2 >= num3) {
		return num2;
	  } else {
		return num3;
	  }
}
console.log(maxOfThree(19, 72, 100));
// H.
function printLongestWord(words) {
	let longestWord = words[0];
  
	for (let i = 1; i < words.length; i++) {
	  if (words[i].length > longestWord.length) {
		longestWord = words[i];
	  }
	}
	return longestWord;
  }

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
//_____________________________________________________________

// V. Objects
// A.
const user = {
	name: 'Alifa',
	email: 'alifa@email.com',
	age: 30,
	purchased: [],
};

// B.
user.email = 'alifawatkins@email.com'
const newAge = user.age++

console.log(user.age);
// C.
user.location = 'Boston, MA';
console.log(user)
// D.
user['purchased'].push('peace of mind','Merino jodhpurs');

console.log(user.purchased[1]);
// E.
// F.
// G.
//_____________________________________________________________


// Extra
