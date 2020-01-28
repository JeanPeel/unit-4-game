//Gem Collector

var winsTxt = document.getElementById('wins');
var lossesTxt = document.getElementById('losses');
var goalValueTxt = document.getElementById('goal-value');
var collectedValueTxt = document.getElementById('collected-value');

var wins = 0;
var losses = 0;
var goalValue = 0;
var collectedValue =1;

var randomNumber1 = Math.ceil(Math.random() * 12);
var randomNumber2 = Math.ceil(Math.random() * 12);
var randomNumber3 = Math.ceil(Math.random() * 12);
var randomNumber4 = Math.ceil(Math.random() * 12);

var randomNumber5 = Math.floor(Math.random() * 101)+20;

        console.log('Purple Circle ' + randomNumber1);
        console.log('Blue Oval ' + randomNumber2);
        console.log('Pink Diamond ' + randomNumber3);
        console.log('Green Heart ' + randomNumber4);

        console.log('Goal Value ' + randomNumber5);

      


$('#restart').click(function(){
        console.log('Restart has been clicked!')
        restartGame()
});

function restartGame() {
        var randomNumber1 = Math.ceil(Math.random() * 12);
        var randomNumber2 = Math.ceil(Math.random() * 12);
        var randomNumber3 = Math.ceil(Math.random() * 12);
        var randomNumber4 = Math.ceil(Math.random() * 12);

        var randomNumber5 = Math.floor(Math.random() * 101)+20;

        console.log(randomNumber5 + " Goal Value reset")  

        console.log(randomNumber1 + " Purple Value reset");
        console.log(randomNumber2 + " Blue Value reset");
        console.log(randomNumber3 + " Pink Value reset");
        console.log(randomNumber4 + " Green Value reset");

        var wins = 0;
        var losses = 0;
        var goalValue = 0;
        var collectedValue =1;

        console.log("Scores Reset!")
}

$('#collect').click(function(){
        console.log('collect has been clicked!')
        collectScores()
});

function collectScores() {
     

        var randomNumber1 = Math.ceil(Math.random() * 12);
        var randomNumber2 = Math.ceil(Math.random() * 12);
        var randomNumber3 = Math.ceil(Math.random() * 12);
        var randomNumber4 = Math.ceil(Math.random() * 12);

        var randomNumber5 = Math.floor(Math.random() * 101)+20;

        console.log(randomNumber5 + " Goal Value collected")  

        console.log(randomNumber1 + " Purple Value collectted");
        console.log(randomNumber2 + " Blue Value collectted");
        console.log(randomNumber3 + " Pink Value collectted");
        console.log(randomNumber4 + " Green Value collectted");
}


$('#purple-circle').click(function(){
        console.log('Purple has been clicked!')
        purpleClick()
});

$('#blue-oval').click(function(){
        console.log('Blue has been clicked!')
        blueClick()
});

$('#pink-diamond').click(function(){
        console.log('Pink has been clicked!')
        pinkClick()
});

$('#green-heart').click(function(){
        console.log('Green has been clicked!')
        greenClick()
});

function purpleClick() {
        // $(collectedValueTxt).text(totalCollected1)
        
        var totalCollected1 = (collectedValue + randomNumber1);
        console.log(totalCollected1)
}

function blueClick() {
        // $(collectedValueTxt).text(totalCollected1)
        
        var totalCollected2 = (collectedValue + randomNumber2);
        console.log(totalCollected2)
}

function pinkClick() {
        // $(collectedValueTxt).text(totalCollected1)
        
        var totalCollected3 = (collectedValue + randomNumber3);
        console.log(totalCollected3)
}

function greenClick() {
        // $(collectedValueTxt).text(totalCollected1)
        
        var totalCollected4 = (collectedValue + randomNumber4);
        console.log(totalCollected4)
}



