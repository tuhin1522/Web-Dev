// // var city0 = "Atlanta";
// // var city1 = "Baltimore";
// // var city2 = "Chicago";
// // var city3 = "Denver";
// // var city4 = "Los Angeles";
// // var city5 = "Seattle";

// // console.log("Welcome to "+ city3);

// // var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

// // var x = [1, "4d", true, 3];

// var pets = [];

// pets[0] = "dog";
// pets[1] = "cat";
// pets[2] = "bird";
// pets[3] = "lizard";
// pets[4] = "fish";
// pets[5] = "gerbil";
// pets[6] = "snake";

// console.log(pets[0]);
// console.log(pets);
// pets.pop();
// console.log(pets);
// pets.push('rat','gorjila');
// console.log(pets);
// pets.shift();
// console.log(pets);

// pets.unshift('fish','feret');
// console.log(pets);

// pets.splice(2, 0, "pig", "duck", "emu");
// console.log(pets);

// var noPets = pets.slice(2, 10);
// console.log(noPets);

// var cityToCheck = "boston";
// var firstChar = cityToCheck.slice(0, 1);
// var otherChars = cityToCheck.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var cappedCity = firstChar + otherChars;
// console.log(cappedCity);

// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
//   monthAbbrev = month.slice(0, 3);
// }
// console.log(monthAbbrev);

// imperative traverse - used loop
// array traverse
const numbers = [2, 5, 6, 7, 89, 100];

let sum = 0;
for (let i =0;i<numbers.length;i++){
  sum += numbers[i];
}
console.log(sum)