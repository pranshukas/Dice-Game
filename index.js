function myFunction() {
    var randomNumber1 = Math.floor(6 * Math.random()) + 1;
    var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", randomImageSource1);

    var randomNumber2 = Math.floor(6 * Math.random()) + 1;
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🎊🚩Player 1 Wins!"
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🎊🚩";
    }
    else {
        document.querySelector("h1").innerHTML = "Oh! It's a Draw...";
    }
}