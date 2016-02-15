main

var images = ["images/bg/lorempixel-1.jpg", "images/bg/lorempixel-2.jpg", "images/bg/lorempixel-3.jpg", "images/bg/lorempixel-4.jpg"];
var i = 0;
var getImage = document.getElementById("img");
var buttonNext = document.getElementById("buttonNext");
var buttonPrevious = document.getElementById("buttonPrevious")

buttonNext.addEventListener("click, next, false");
buttonPrevious.addEventListener("click, previous, false")

function init() {
	getImage.src = images[0];
}

function next() {
	/* i++;
	if (i >= images.length) {
		i = 0;
	}*/
	i = (i+1) % images.length; // même chose que les trois lignes au dessus
	getImage.src = images[i];
}

function previous() {
	i = i - 1;
	if (i < 0) {
		i = images.length - 1;
	}
	getImage.src = images[i];
}



init();