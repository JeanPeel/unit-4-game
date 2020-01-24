var winsTxt = document.getElementById('wins');
var lossesTxt = document.getElementById('losses');
var goalValueTxt = document.getElementById('goal-value');
var collectedValueTxt = document.getElementById('collected-value');
var purpleCircleClk = document.getElementById('purple-circle');
var blueOvalClk= document.getElementById('blue-oval');
var pinkDiamondClk = document.getElementById('pink-diamond');
var greenHeartClk = document.getElementById('green-heart');
var gemsLd = document.getElementsByClassName('gem');
// var restartClk = document.getElementById('restart');
var submitClk = document.getElementById('submit');

var wins = 0;
var losses = 0;
var goalValue = 0;
var collectedValue =0;

var randomNumber1 = Math.floor(Math.random() * 11 + 1);
var randomNumber2 = Math.floor(Math.random() * 11 + 1);
var randomNumber3 = Math.floor(Math.random() * 11 + 1);
var randomNumber4 = Math.floor(Math.random() * 11 + 1);

var randomNumber5 = Math.floor(Math.random() * 119 + 1);




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
});

// $('#blue-oval').on('click',function(){
//         console.log('Blue Oval has been clicked!')
// });



