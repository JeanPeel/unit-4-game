// Starting over.  I learned a lot from game.js  But I want to start fresh.


var gemRandomizer = Math.ceil(Math.random() * 12);
var goalRandomizer = Math.floor(Math.random() * 101)+20;

function gemValue () {gemRandomizer}
function goalValue () {goalRandomizer}

function doThisGems () {
    this.randomNumber = gemValue ();
    console.log (gemRandomizer)
}

function doThisGoal () {
    this.randomNumber = goalValue ();
    console.log (goalRandomizer)
}

$('#restart').click(function(){
    console.log('Restart has been clicked!')
    doThisGems()
    doThisGoal()
});