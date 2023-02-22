////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        console.log(i); 
    } 
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz"); 
    } else if (i % 5 === 0) {
        console.log("Buzz");
    }
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee.splice(2, 1, 5001);
wolfy.splice(3, 1, "Gotham City");
dart.push("Hawkins")
wolfy.splice(0, 1, "Gameboy")

console.log(wolfy);
console.log(plantee);
console.log(dart);
////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (let index = 0; index < ninjaTurtles.length; index++) {
    console.log(ninjaTurtles[index].toUpperCase())
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[8]);
favMovies.sort();
console.log(favMovies);
favMovies.pop();
console.log(favMovies);
favMovies.push("Guardians of the Galaxy")
favMovies.reverse();
console.log(favMovies);
favMovies.shift();
console.log(favMovies);
favMovies.unshift();
console.log(favMovies);
console.log(favMovies.indexOf('Django Unchained'))
favMovies.splice(4, 1, "Avatar");
console.log(favMovies);

const middleIndex = Math.floor(favMovies.length / 2);
const lastHalf = favMovies.slice(middleIndex);

console.log(lastHalf);

console.log(favMovies.indexOf('Fast and Furious'))
////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////