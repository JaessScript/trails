// Based on https://www.youtube.com/watch?v=vqE8DMfOajk

let starters = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 15; i++) {
		starters.push(new Tracked(i * (windowWidth / (i + random(1, 5))), i * (windowHeight / (i + random(1, 5)))));
	}
}

function draw() {
	background(0);

	for (let i = 0; i < 15; i++) {
		starters[i].show();
		starters[i].move();
		starters[i].drawTrail();
	}
}