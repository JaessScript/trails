// Based on https://www.youtube.com/watch?v=vqE8DMfOajk

let myPixel;

function setup() {
	createCanvas(windowWidth, windowHeight);
	myPixel = new Tracked(windowWidth / 2, windowHeight / 2);
}

function draw() {
	background(0);
	myPixel.show();
	myPixel.move();
	myPixel.drawTrail();
}