var wins = document.getElementById('wins');
var losses = document.getElementById('losses');
var goalValue = document.getElementById('goal-value');
var collectedValue = document.getElementById('collected-value');
var purpleCircle = document.getElementById('purple-circle');
var blueOval = document.getElementById('blue-oval');
var pinkDiamond = document.getElementById('pink-diamond');
var greenHeart = document.getElementById('green-heart');
var gems = document.getElementsByClassName('gem')

var randomNumber3 = Math.floor(Math.random() * 3)
var randomNumber2 = Math.floor(Math.random() * 2)

$(randomNumber3).load()
$(randomNumber2).load()

console.log (randomNumber3);
console.log (randomNumber2);

var confirmLost = alert("You Loose! Do you want to reset the game?");
        confirmLost

// $(goalValue).load(randomNumber3);

//     if (randomNumber3 > 19) {
//         randomNumber3
//     }


// $(gems).load(randomNumber2);

// if (randomNumber2 <12) {
//     randomNumber2
// }

// console.log (randomNumber3);
// console.log (randomNumber 2);