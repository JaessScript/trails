class Tracked {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.history = [];
    }

    show() {
        push();
        rectMode(CENTER);
        noStroke();
        fill(130, 255, 200, random(0, 255));
        rect(this.x, this.y, random(5, 20), random(5, 20));
        pop();
    }

    move() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);
        this.history.push(createVector(this.x, this.y));
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }

    drawTrail() {
        push();
        rectMode(CENTER);
        noStroke();
        fill(130, 255, 200, random(0, 255));
        for (let h of this.history) {
            rect(h.x, h.y, random(5, 20), random(5, 20));
        }
        pop();
    }
}