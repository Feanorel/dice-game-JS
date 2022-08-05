var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;
 
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player1 wins then
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 have won!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🎉 Player 2 have won!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
