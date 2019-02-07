//Q1 Create a function that displays prototypal inheritance.
    function Horse() {
        this.make = "Araber"
    }
    Horse.prototype.breed = function() {
        console.log("My horses parent is a warmblood "+ this.make + " super fast pure breed");
    };
    var araber = new Horse();
    araber.breed();
/*Q2 Create an array of numbers from 1 – 10; slice the 5th number in the array.*/
  var numbers = [1,2,3,4,5,6,7,8,9,10];
  console.log(numbers.length);
//Q3 Delete the last number in the array that you created above.
  console.log(numbers.slice(5));
/*Q4 Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:
“Strawberries are a popular part of spring and summer diets throughout America.
Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes.
They announce the impending arrival of the ruby red berries that so many people crave.
Ripe strawberries taste sweet and have only a slight hint of tartness.
They are also one of the healthiest fruits around.
There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.”*/
function WordChange(){
  var str = "Strawberries are a popular part of spring and summer diets throughout America ouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushesThey announce the impending arrival of the ruby red berries that so many people craveRipestrawberries taste sweet and have only a slight hint of tartnessThey are alsoone of the healthiest fruits aroundThere are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";
  var txt = str.replace(/strawberry/i,"banana");
  var txt = txt.replace(/strawberries/i,"bananas");
  console.log(txt);
}
WordChange();



/*Q6 Create an array of objects with 3 people inside it. Use the filter function to map by a name.*/

var myFamily = [
  {sidekick: "Mom", myFamily:"Guro"},
  {sidekick: "Dad", myFamily:"Arne"},
  {sidekick: "Brother", myFamily:"Per"},
]
var sidekick = myFamily.filter(function(sidekick){
  return (sidekick.myFamily === "Arne");
})

console.log(sidekick);

/*Create a simple function that logs the date.*/
var theDateToday = new Date ();
console.log(theDateToday);
