var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Random number generation
var randomDiceImage = "dice" + randomNumber1 + ".png"; // Images from 1-6 from image folder
var randomImageSource = "images/" + randomDiceImage; // Select images from Images folder.

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource); // Set Attribute using Attribute Selector..

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "😇 Player1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🙂 Player2 Wins";
} else {
  document.querySelector("h1").innerHTML = " DRAW !!";
}
