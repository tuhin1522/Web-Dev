// var cityToCheck = "Tucson";

// var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

// var matchFound = false;
// for(var i=0;i<cleanestCities.length;i++){
//   if(cityToCheck === cleanestCities[i]) {
//     matchFound = true;
//     console.log("It's one of the cleanest cities.");
//     break;
//   }
// }

// if(matchFound === false){
//   console.log("It's not on the list.");
// }

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];

for(var i=0;i<firstNames.length;i++) {
  for(var j=0;j<lastNames.length;j++) {
    console.log(firstNames[i] + lastNames[j]);
  }
  console.log('\n');
}