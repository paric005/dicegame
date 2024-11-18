var randomnum1 = Math.floor(Math.random()*6) + 1;
var image1 = "dice" + randomnum1 + ".png"
var imgsr1 = "images/" + image1

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",imgsr1)

var randomnum2 = Math.floor(Math.random()*6) + 1;
var image2 = "dice" + randomnum2 + ".png"
var imgsr2 = "images/" + image2

var img1 = document.querySelectorAll("img")[1];

img1.setAttribute("src",imgsr2)


if(randomnum2>randomnum1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
if(randomnum2<randomnum1){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else{
    document.querySelector("h1").innerHTML = "DRAW!!!"
}