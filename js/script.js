// targeting elemennts
var diceRollbtn = document.querySelector(".dice-roll");
var playerBtn = document.querySelector(".player-names");
var winner = document.querySelector('h1');

// game stars
diceRollbtn.addEventListener("click", function () {

    setTimeout(function () {

        //For Player 1
        var randomNumber1 = Math.floor((Math.random() * 6) + 1);
        var randomImage1 = "images/dice" + randomNumber1 + ".png";
        var image1 = document.querySelectorAll("img")[0];
        image1.setAttribute("src", randomImage1);

        //For Player 2
        var randomNumber2 = Math.floor((Math.random() * 6) + 1);
        var randomImage2 = "images/dice" + randomNumber2 + ".png";
        var image2 = document.querySelectorAll("img")[1];
        image2.setAttribute("src", randomImage2);

        // dice rolling sound
        var audio = new Audio('sounds/roll.mp3');
        audio.play();

        // winner declaration
        if (randomNumber1 > randomNumber2) {
            winner.innerHTML = "<span>&#128681</span>" + player1 + " Wins!";
            setTimeout(function () {
                var audio = new Audio('sounds/win.mp3');
                audio.play();
            }, 600);
        } else if (randomNumber2 > randomNumber1) {
            winner.innerHTML = player2 + " Wins!<span>&#128681</span>";
            setTimeout(function () {
                var audio = new Audio('sounds/win.mp3');
                audio.play();
            }, 600);
        } else {
            winner.innerHTML = "Draw!";
            setTimeout(function () {
                var audio = new Audio('sounds/draw.wav');
                audio.play();
            }, 600);
        }


    }, 600);

})

// setting default players name
var player1 = "Player 1";
var player2 = "Player 2";

//Player names
playerBtn.addEventListener("click", function () {
    player1 = prompt("Enter Player 1 Name : ");
    player2 = prompt("Enter Player 2 Name : ");
    document.getElementById("player1").innerHTML = player1;
    document.getElementById("player2").innerHTML = player2;
});