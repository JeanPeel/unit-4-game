var winsTxt = document.getElementById('wins');
var lossesTxt = document.getElementById('losses');
var goalValueTxt = document.getElementById('goal-value');
var collectedValueTxt = document.getElementById('collected-value');
var purpleCircleClk = document.getElementById('purple-circle');
var blueOvalClk= document.getElementById('blue-oval');
var pinkDiamondClk = document.getElementById('pink-diamond');
var greenHeartClk = document.getElementById('green-heart');
var gemsLd = document.getElementsByClassName('gem');
var restartClk = document.getElementById('restart');
var collectClk = document.getElementById('collect');

var wins = 0;
var losses = 0;
var goalValue = 0;
var collectedValue =0;

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

        document.getElementById('blue-oval').addEventListener('click',function(){
        console.log('Blue Oval has been clicked!')
        });


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
        var collectedValue =0;

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






