// var diceimagenumber = Math.floor(Math.random() * 6) + 1;
// var diceimage = "dice" + diceimagenumber + ".png";
// var diceimagesource = "./images/images" + diceimage; 
// var image1 = documnent.querySelectorAll("img")[0];
// image1.setAttribute("src", diceimagesource);


// var diceimagenumber2 = Math.floor(Math.random() * 6) + 1;
// var diceimage2 = "dice" + diceimagenumber2 + ".png";
// var diceimagesource = "./images/images" + diceimage2; 
// var image2 = documnent.querySelectorAll("img")[1];
// image2.setAttribute("src", diceimagesource);



var diceImageNumber = Math.floor(Math.random()* 6) + 1;
var diceImage = "dice" + diceImageNumber + ".png";
var diceImageSource = "/images/images/" + diceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", diceImageSource);
var diceImageNumber2 = Math.floor(Math.random()* 6) + 1;
var diceImage2 = "dice" + diceImageNumber2 + ".png";
var diceImageSource2 = "/images/images/" + diceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", diceImageSource2);
if (diceImageNumber > diceImageNumber2) {
    document.querySelector("h1").innerrHTML = "🚩Player 1 Wins!";}
else if (diceImageNumber2 > diceImageNumber) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
    document.querySelector("h1").innerHTML = "🚩Draw!🚩"
}





